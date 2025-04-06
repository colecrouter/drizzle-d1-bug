import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const apps = sqliteTable("apps", {
	id: integer("app_id").notNull().primaryKey(),
	data: text("data", { mode: "json" }),
	updated_at: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
});

export const achievementsStats = sqliteTable("achievements_stats", {
	app_id: integer("app_id").notNull().primaryKey(),
	data: text("data", { mode: "json" }),
	updated_at: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
});

export const achievementsMeta = sqliteTable("achievements_meta", {
	app_id: integer("app_id").notNull(),
	lang: text("lang").notNull(),
	data: text("data", { mode: "json" }),
	updated_at: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
});
