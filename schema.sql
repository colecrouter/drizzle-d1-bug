DROP TABLE IF EXISTS achievements_meta;

DROP TABLE IF EXISTS achievements_stats;

DROP TABLE IF EXISTS apps;

CREATE TABLE `achievements_meta` (
    `app_id` integer NOT NULL,
    `lang` text NOT NULL,
    `data` text,
    `updated_at` integer NOT NULL
);

--> statement-breakpoint
CREATE TABLE `achievements_stats` (
    `app_id` integer NOT NULL,
    `data` text,
    `updated_at` integer NOT NULL
);

--> statement-breakpoint
CREATE TABLE `apps` (
    `app_id` integer NOT NULL,
    `data` text,
    `updated_at` integer NOT NULL
);

INSERT INTO
    `apps` (`app_id`, `data`, `updated_at`)
VALUES
    (2195250, '{"object":true}', 1698230400);

INSERT INTO
    `achievements_stats` (`app_id`, `data`, `updated_at`)
VALUES
    (2195250, '["yay"]', 1698230400);

INSERT INTO
    `achievements_meta` (`app_id`, `lang`, `data`, `updated_at`)
VALUES
    (2195250, 'english', '["other yay"]', 1698230400);