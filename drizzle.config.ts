import { defineConfig } from "drizzle-kit";

import { env } from "~/env";

export default defineConfig ({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    url: env.POSTGRES_URL
  },
  tablesFilter: ["emp-track_*"],
})

// schema: "./src/server/db/schema.ts",
// dialect: "pg",
// driver: "pg",
// dbCredentials: {
//   connectionString: env.POSTGRES_URL,
// },
// tablesFilter: ["emp-track_*"],