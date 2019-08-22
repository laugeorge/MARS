-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS toDoList_db;
-- Creates the "animals_db" database --
CREATE DATABASE toDoList_db;

-- Makes it so all of the following code will affect animals_db --
USE toDoList_db;

-- Creates the table "people" within animals_db --
CREATE TABLE toDo (
    user_id INT NOT NULL AUTO_INCREMENT,

    id INT NOT NULL AUTO_INCREMENT,
    -- Makes a string column called "to do" which cannot contain null --
    todo VARCHAR(50) NOT NULL,

    -- Makes a boolean column called "created_at" which cannot contain null --
    -- created_at BOOLEAN NOT NULL,

    PRIMARY KEY (user_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO toDo (id, todo)
VALUES ("farm potato", TRUE, "Rockington", 100);

INSERT INTO toDo (id, todo)
VALUES ("fix rover", TRUE, "Rockington", 100);


