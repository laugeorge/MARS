CREATE DATABASE mars_db;
USE mars_db;

CREATE TABLE users(
	id INT auto_increment primary key,
    first_name varchar(255),
    last_name varchar(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
-- Create table authenticate(
--  		id Int auto_increment primary key,
--         passKey varchar(255),
--         user_id int not null,
--          Foreign Key (user_id) references users(id)
--         );
--     
--   CREATE TABLE chat(
-- 			 		id Int auto_increment primary key,
--                     message varchar(255),
--                     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--                     user_id int not null,
--                     foreign key (user_id) references users(id)
--                     );

-- create table role(
-- 	id Int auto_increment primary key,
--     type varchar(255),
--     user_id int not null,
--     foreign key (user_id) references users(id)
--     
-- );

create table todo (
	id Int auto_increment primary key,
		task varchar(255),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		user_id int not null,
       -- foreign key(role_id) references role(id),
		foreign key (user_id) references users(id)
);

create table active (
       todo_id int not null,
		user_id int not null,
        foreign key (todo_id) references todo(id),
		foreign key (user_id) references users(id),
        primary key (todo_id, user_id)
);
         