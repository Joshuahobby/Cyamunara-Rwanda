import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../shared/schema";

// Neon's HTTP driver is used rather than a TCP pool because the production
// target is serverless: each invocation is short-lived, so a pool would keep
// opening connections it never gets to reuse.
//
// This expects a Neon-backed Postgres (Vercel Postgres and Replit both are).
// For a non-Neon host such as Supabase or self-hosted Postgres, swap this for
// `drizzle-orm/postgres-js` (or node-postgres) and install that driver; the
// storage layer above it does not change.

const connectionString = process.env.DATABASE_URL;

export const db = connectionString
  ? drizzle(neon(connectionString), { schema })
  : null;

export const isDatabaseConfigured = db !== null;

if (!db && process.env.NODE_ENV === "production") {
  // Loud on purpose: without this the contact form still answers 201 while
  // every submission is discarded with the instance that handled it.
  console.error(
    "[storage] DATABASE_URL is not set. Falling back to in-memory storage; " +
      "contact submissions WILL NOT be persisted.",
  );
}
