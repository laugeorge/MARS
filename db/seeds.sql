-- INSERT ROVER
INSERT INTO users(first_name, username, created_at) VALUES
('Curiosity', 'Curiosity', '2012-08-06 05:17:00');

-- USERS 
INSERT INTO users(first_name, last_name, username, password, job_title, created_at) VALUES
('Chris','Hubbard','NeoParadigm84','1234','Engineer', '2018-04-01 13:00:00'),
('George','Lau','George_Lau','1111','Mechanic', '2018-04-01 13:00:00'),
('Kim','Spiegel','kimSpiegel04','password','Specialist', '2018-04-01 13:00:00'),
('Pooja','Chauhan','CCChauhan','guest','Microbiologist', '2018-04-01 13:00:00'),
('Shanekia','Jones','S_Jones','4321','Space DJ', '2018-04-01 13:00:00');

-- SOME DUMMY TODOS
INSERT INTO todo (task, user_id) VALUES 
('Check garden soil', 5),
('Check air quality', 3),
('Create bomb playlist', 6),
('Clean filters', 2),
('Write logs', 4);

-- DUMMY CHATS
INSERT INTO chat (message, user_id) VALUES
('Hello and goodbye. It is a desert.', 5),
('Mars is hot as balls', 2),
('I keep getting dust in my underwear', 6),
("Help I'm trapped in the airlock", 3),
('Can someone grab a water for me from the kitchen?',4);
