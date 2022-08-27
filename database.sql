-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE grocery (
    id SERIAL PRIMARY KEY,
    item varchar (80) NOT NULL,
    quantity FLOAT NOT NULL,
    unit varchar (20),
    purchased boolean default false
);

INSERT INTO grocery (item, quantity, unit, purchased)
VALUES ('Apples', 5, 'lbs', false),
('Bread', 1, 'loaf', false);