import express, { type Request, type Response } from "express";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";
import { registerRoutes } from "../server/routes";

// Serverless entrypoint for Vercel, mapped by file-based routing to
// POST /api/contact.
//
// This intentionally does NOT reuse server/index.ts: that module imports
// server/vite.ts (and therefore `vite`, a devDependency) and calls
// server.listen(), neither of which belongs in a serverless function.
// Static assets are served by Vercel's CDN from dist/public, so only the
// API surface lives here.

const app = express();

// Vercel terminates TLS at its proxy; without this, `cookie.secure` in
// production would stop the session cookie from ever being set.
app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    genid: () => uuidv4(),
    secret: process.env.SESSION_SECRET || "development_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  }),
);

// registerRoutes is async, and a cold start may race the first request, so
// every invocation awaits the same one-time registration promise.
const ready = registerRoutes(app).then(() => app);

export default async function handler(req: Request, res: Response) {
  const configured = await ready;
  // This file *is* the /api/contact endpoint, so pin the path rather than
  // depending on how the platform rewrites req.url before invoking us.
  req.url = "/api/contact";
  return configured(req, res);
}
