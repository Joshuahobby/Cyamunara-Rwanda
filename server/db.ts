import { neon } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../shared/schema";

// The production target is serverless, where each invocation is short-lived.
//
// On Neon (Vercel Postgres and Replit both are) the HTTP driver is the right
// fit: it issues queries over fetch, so there is no TCP pool to keep opening
// connections that never get reused.
//
// Any other Postgres — Supabase, RDS, self-hosted — goes through postgres-js
// with the pool capped at one connection, which is what keeps a serverless
// deployment from exhausting the server's connection limit under load.

const connectionString = process.env.DATABASE_URL;

function createClient(url: string) {
  const isNeon = /\.neon\.tech(?::\d+)?(?:\/|$)/.test(new URL(url).host + "/");

  if (isNeon) {
    return drizzleNeon(neon(url), { schema });
  }

  return drizzlePostgres(
    postgres(url, {
      max: 1,
      // Supabase's pooler and most managed hosts require TLS but present a
      // certificate for the pooler rather than the database host.
      ssl: url.includes("sslmode=disable") ? false : "require",
    }),
    { schema },
  );
}

export const db = connectionString ? createClient(connectionString) : null;

export const isDatabaseConfigured = db !== null;

if (!db && process.env.NODE_ENV === "production") {
  // Loud on purpose: without this the contact form still answers 201 while
  // every submission is discarded with the instance that handled it.
  console.error(
    "[storage] DATABASE_URL is not set. Falling back to in-memory storage; " +
      "contact submissions WILL NOT be persisted.",
  );
}
