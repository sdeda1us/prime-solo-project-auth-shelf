-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" ("description", "image_url")
VALUES ('An appropriate broomstick', 'https://image.shutterstock.com/image-photo/broom-rods-wooden-handle-isolate-260nw-1517464433.jpg'), 
('an appropriate poisoned apple', 'https://static.wikia.nocookie.net/evil/images/5/54/The_Poisoned_Apple.jpg/revision/latest/top-crop/width/300/height/300?cb=20160209173752'), 
('an appropriate cauldron', 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/452779/906084/main-image')