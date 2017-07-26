CREATE TABLE volunteers
  (
    fullName VARCHAR(25),
    email VARCHAR(25),
    skill VARCHAR(25),
    age INT,
    PRIMARY KEY (email)
  );





  -- To run this script:
  -- source 01-mysql-scripts/02-insert.sql

  --
  INSERT INTO volunteers(fullName, email, skill, age)
      VALUES
          ('Ayumi Hamasaki', 'ayumi@jmail.jp', 'Singer', 22),
          ('Mark Steward', 'mark@gmail.com', 'Electric Engineer', 22),
          ('Aaron Wardon', 'aaron@gtech.com', 'Web Devloper', 30),
          ('Blake Rutter', 'blake@sitcon.net', 'Kitchen Cook', 33);


  -- SELECT * FROM web_dev;
