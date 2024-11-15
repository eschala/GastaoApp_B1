DROP TABLE IF EXISTS a_tb_users;


DROP TABLE IF EXISTS az_tb_tipo_users;

CREATE TABLE az_tb_tipo_users (
    Id_Tipo_User SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing integer
    Tipo_User VARCHAR(255) DEFAULT NULL
);

CREATE TABLE a_tb_users (
    Id_User SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing integer
    DNI_User BIGINT NOT NULL UNIQUE, -- Unique constraint on DNI
    Email_User VARCHAR(255) NOT NULL UNIQUE, -- Unique constraint on email
    Tipo_User_Id BIGINT NOT NULL REFERENCES az_tb_tipo_users(Id_Tipo_User) ON DELETE CASCADE ON UPDATE CASCADE,
    LastName_User VARCHAR(255) DEFAULT NULL,
    Name_User VARCHAR(255) NOT NULL
);

INSERT INTO az_tb_tipo_users (Tipo_User)
VALUES ('SuperAdmin'), ('Admin'), ('Supervisor'), ('Standard');

INSERT INTO a_tb_users (DNI_User, Email_User, Tipo_User_Id, LastName_User, Name_User)
VALUES (1000618284, 'eduar.chala@yahoo.com', 1, 'Chalá', 'Samir'),
       (1000, 's@hotmail.com', 3, 'Cuesta', 'Adriana'),
       (999, 'e@gmail.com', 4, 'Ramirez', 'Jhon');




