mysql> CREATE TABLE singers (
          id_number INT NOT NULL AUTO_INCREMENT,
          name VARCHAR(25),
          age INT,
          PRIMARY KEY (id_number)
        );

Query OK, 0 rows affected (0.01 sec)

mysql> DESC singers;
+-----------+-------------+------+-----+---------+----------------+
| Field     | Type        | Null | Key | Default | Extra          |
+-----------+-------------+------+-----+---------+----------------+
| id_number | int(11)     | NO   | PRI | NULL    | auto_increment | 
| name      | varchar(25) | YES  |     | NULL    |                |
| age       | int(11)     | YES  |     | NULL    |                |
+-----------+-------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

mysql> INSERT INTO singers (name, age)
    VALUES
      ('Hamasaki', 37),
      ('Hyolin', 26),
      ('Mad Clown', 28);

Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM singers;
+-----------+-----------+------+
| id_number | name      | age  |
+-----------+-----------+------+
|         1 | Hamasaki  |   37 |
|         2 | Hyolin    |   26 |
|         3 | Mad Clown |   28 |
+-----------+-----------+------+
3 rows in set (0.00 sec)
