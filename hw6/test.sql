SELECT * FROM film;
SELECT COUNT(*)
FROM payment
WHERE amount > 3.00;
SELECT COUNT(DISTINCT district)
FROM address;
SELECT *
FROM film
WHERE title ILIKE 'J%';
SELECT *
FROM language
WHERE language_id IN (1, 5);
INSERT INTO language (name)
VALUES ('Ukrainian')
RETURNING *;
INSERT INTO city (city, country_id)
VALUES ('Hadiach', (SELECT country_id FROM country WHERE country = 'Ukraine'))
RETURNING *;
UPDATE city
SET city = 'Dnipro'
WHERE city_id = 601
RETURNING *;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (username, email, first_name, last_name, password)
VALUES('nentoday', 'nentoday@example.com', 'nen', 'today', 'yadotnen');
DELETE FROM public.users;

