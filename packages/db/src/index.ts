import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export * from "drizzle-orm";
export { alias } from "drizzle-orm/pg-core";

const sql = neon(process.env.DATABASE_URL!);

export type DB = ReturnType<typeof drizzle<typeof schema>>;

// eslint-disable-next-line no-undef
const globalForDb = globalThis as unknown as {
  db: DB | undefined;
};

export const db = globalForDb.db ?? drizzle(sql, { schema });

if (process.env.NODE_ENV !== "production") {
  globalForDb.db = db;
}
