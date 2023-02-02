CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL
  role varchar(15) NOT NULL DEFAULT 'visitor'
  hashed_password varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (name, role, hashed_password) VALUES 
('Eetes','king', "$argon2id$v=19$m=65536,t=1,p=1$dE5lWGJmeEg0MFlubVRVUg$zD5T237OboBmNs8uUGxkpA"),
('Fred', 'tresorier', "$argon2id$v=19$m=65536,t=1,p=1$dE5lWGJmeEg0MFlubVRVUg$zD5T237OboBmNs8uUGxkpA");

CREATE TABLE tresor (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  quantity number NOT NULL,
  cost_at_purchase number not null,
  maintenance_cost_per_month number not null,
  total_cost_per_year number not null,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO tresor (name, quantity, cost_at_purchase, maintenance_cost_per_month, total_cost_per_year) VALUES
("Cavalerie", 60, 120, 20, 7740)