import { and, eq, inArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { achievementsMeta, achievementsStats, apps } from "./schema.js";
// @ts-check
import { getPlatformProxy } from "wrangler";

const platform = await getPlatformProxy();
/** @type {D1Database} */
// @ts-ignore
const d1 = platform.env.DB;

const db = drizzle(d1);

const result = db
	.select({
		achievements_stats: achievementsStats,
		achievements_meta: {
			app_id: achievementsMeta.app_id,
			lang: achievementsMeta.lang,
			// data: achievementsMeta.data, // Breaks because of JSON parsing "undefined"
		},
	})
	.from(achievementsStats)
	.leftJoin(
		achievementsMeta,
		and(
			eq(achievementsStats.app_id, achievementsMeta.app_id),
			eq(achievementsMeta.lang, "english"),
		),
	)
	.where(inArray(achievementsStats.app_id, [2195250]));

try {
	const [res] = await db.batch([result]);
	console.log("Fetched batch:", res);
} catch (e) {
	console.error("Error fetching batch:", e);
}

try {
	const res = await result;
	console.log("Fetched single query:", res);
} catch (e) {
	console.error("Error fetching data:", e);
}

// const rawSqlBatch = result.toSQL();
// const resultBatch = d1.batch([
// 	d1.prepare(rawSqlBatch.sql).bind(...rawSqlBatch.params),
// ]);
// console.log((await resultBatch).map((r) => r.results));

// const rawSql = result.toSQL();
// const rawResult = d1
// 	.prepare(rawSql.sql)
// 	.bind(...rawSql.params)
// 	.raw();
// console.log(await rawResult);
