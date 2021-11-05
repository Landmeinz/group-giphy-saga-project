CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(100),
    "url" VARCHAR(256),
    "giphy_id" VARCHAR(150),
    "category_id" INT REFERENCES "category"
);

INSERT INTO favorites ("title", "url", "category_id")
VALUES ('test1', 'url1', 1),
('test1', 'url2', 2);
