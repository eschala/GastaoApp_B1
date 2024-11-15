DROP TABLE IF EXISTS a_tb_users;
DROP TABLE IF EXISTS az_tb_tipo_users;

CREATE TABLE az_tb_tipo_users (
  Id_Tipo_User SERIAL PRIMARY KEY,
  Tipo_User VARCHAR(255) DEFAULT NULL
);

CREATE TABLE a_tb_users (
  Id_User SERIAL PRIMARY KEY,
  DNI_User BIGINT NOT NULL UNIQUE,
  Name_User VARCHAR(255) NOT NULL,
  LastName_User VARCHAR(255) DEFAULT NULL,
  Email_User VARCHAR(255) NOT NULL UNIQUE,
  Pass_User VARCHAR(255) DEFAULT NULL,
  Tipo_User_Id BIGINT NOT NULL REFERENCES az_tb_tipo_users(Id_Tipo_User) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO az_tb_tipo_users (Tipo_User)
VALUES ('SuperAdmin'), ('Admin'), ('Supervisor'), ('Standard');

INSERT INTO a_tb_users (DNI_User, Email_User, Tipo_User_Id, LastName_User, Name_User, Pass_User)
VALUES (1000618284, 'eduar.chala@yahoo.com', 1, 'Chalá', 'Samir', '#29'),
       (1000, 's@hotmail.com', 3, 'Cuesta', 'Adriana', 'Adri1234'),
       (999, 'e@gmail.com', 4, 'Ramirez', 'Jhon', 'J78po');