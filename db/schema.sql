CREATE DATABASE mars_db;
USE mars_db;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    job_title VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE todo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255),
    user_id INT,
    completed BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

<<<<<<< HEAD
create table active (
       todo_id int not null,
		user_id int not null,
        foreign key (todo_id) references todo(id),
		foreign key (user_id) references users(id),
        primary key (todo_id, user_id)
);
         
=======

CREATE TABLE chat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255),
    user_id INT,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
>>>>>>> e8e5d9591e8652bb066857276dcd537c768e9cdc
