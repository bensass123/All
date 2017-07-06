CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id int NOT NULL AUTO_INCREMENT primary key,
  author varchar(255) NOT NULL,
  chirp varchar(255) NOT NULL,
  time_created TIMESTAMP
);