DROP database chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username TEXT,
  roomname TEXT,
  message TEXT,
  createdAt DATETIME
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

