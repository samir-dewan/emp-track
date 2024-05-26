// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import exp from "constants";
import { sql } from "drizzle-orm";
import {
  date,
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `emp-track_${name}`);

export const images = createTable(
  "exp",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    imageUrl: varchar("imageUrl", {length: 1024}).notNull(),
    experienceType: varchar("experienceType", {length: 256}).notNull(),
    logoUrl: varchar("logoUrl", {length: 256}),
    role: varchar("role", {length: 256}),
    dateStarted: date("dateStarted").notNull(),
    dateCompleted: date("dateCompleted"),
    description: varchar("description").notNull(),
    techStackIds: integer("techStackIds").array(),
    highlightIds: integer("highlightIds").array(),
    linkIds: integer("linkIds").array(),
    userId: varchar("userId", {length: 256}).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const techStack = createTable(
  "techStack",
  {id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256}).notNull(),
    imageUrl: varchar("imageUrl", { length: 1024}).notNull(),
  }
)

export const highlight = createTable(
  "highlight",
  {id: serial("id").primaryKey().notNull(),
    expId: integer("exp_id").notNull().references(() => images.id),
    imageUrl: varchar("imageUrl", { length: 1024}).notNull(),
    keystat: varchar("keystat", { length: 256}).notNull(),
    description: varchar("description", {length: 1024}).notNull(),
  }
)

export const link = createTable(
  "link",
  {id: serial("id").primaryKey().notNull(),
    linkUrl: varchar("linkurl", {length: 512}).notNull(),
    text: varchar("text", {length: 128}),
    logo: varchar("logo", {length: 512}),
  }
)