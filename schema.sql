drop database if exists marsChat_db;

CREATE database marsChat_db;

USE marsChat_db;

CREATE TABLE chats
( 	id int auto_increment not null primary key,
    chatName VARCHAR (250) not null
    );
    
CREATE TABLE messages (
	id int AUTO_INCREMENT NOT NULL primary key,
    message VARCHAR(250) NOT NULL,
	sender VARCHAR(250) NOT NULL,
    chats_id int (50),
	FOREIGN KEY(chats_id) REFERENCES chats(id),
	created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
id int auto_increment NOT NULL primary KEY,
userName varchar(250) NOT NULL,
roles varchar(250) NOT NULL
);

insert into chats (chatName) values ("Maintenance");
insert into chats (chatName) values ("On Base");
insert into chats (chatName) values ("Social");

insert into users (userName, roles) values ("DJ Shaneka", "DJ");
insert into users (userName, roles) values ("Georgy Porgey", "Mechanic");
insert into users (userName, roles) values ("Maste Kim", "Rover Driver");
insert into users (userName, roles) values ("CJ from Uranus", "Pilot");
