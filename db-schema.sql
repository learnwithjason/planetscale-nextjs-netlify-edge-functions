CREATE TABLE food (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL
);

INSERT INTO food (name)
VALUES  ('Pizza');

INSERT INTO food (name)
VALUES  ('Smashburgers');

INSERT INTO food (name)
VALUES  ('Sushi');

INSERT INTO food (name)
VALUES  ('Donuts');

SELECT * FROM food;