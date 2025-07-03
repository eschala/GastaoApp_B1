-- SQL Server DDL for Gastao_Db

-- Note: In SQL Server, database creation and selection are typically
-- handled separately or with different syntax.
-- You would usually create the database first, then select it:
-- CREATE DATABASE Gastao_Db;
-- USE Gastao_Db;



CREATE TABLE Rol_De_Usuarios (
    -- AUTO_INCREMENT in MySQL is IDENTITY(start_value, increment) in SQL Server
    Id_Rol_Usuario INT IDENTITY(1,1) PRIMARY KEY,
    Rol_De_Usuario VARCHAR(255) NOT NULL
);

CREATE TABLE Usuarios (
    Id_Usuario INT IDENTITY(1,1) PRIMARY KEY,
    Dni_Usuario INT NOT NULL UNIQUE,
    Name_Usuario VARCHAR(255) NOT NULL,
    Last_Name_Usuario VARCHAR(255),
    Email_Usuario VARCHAR(255) NOT NULL,
    Pass_Usuario VARCHAR(255) NOT NULL,
    Rol_Usuario_Id INT NOT NULL,
    -- Foreign key constraint
    FOREIGN KEY (Rol_Usuario_Id) REFERENCES Rol_De_Usuarios(Id_Rol_Usuario)
);

CREATE TABLE Type_Egresos (
    Id_Type_Egreso INT IDENTITY(1,1) PRIMARY KEY,
    Type_Egreso VARCHAR(255) NOT NULL
);

CREATE TABLE Egresos (
    Id_Egreso INT IDENTITY(1,1) PRIMARY KEY,
    -- DATETIME is compatible, adding DEFAULT GETDATE() for current date/time if desired
    Reg_Date_Egreso DATETIME DEFAULT GETDATE(),
    Tittle_Egreso VARCHAR(255) NOT NULL,
    -- TEXT in MySQL is NVARCHAR(MAX) or VARCHAR(MAX) in SQL Server
    Description_Egreso NVARCHAR(MAX),
    Amount_Egreso INT,
    -- DOUBLE in MySQL is FLOAT in SQL Server for floating-point numbers
    Value_Egreso FLOAT NOT NULL,
    Type_Egreso_Id INT NOT NULL,
    Usuario_Id_E INT NOT NULL,
    -- Foreign key constraints
    FOREIGN KEY (Type_Egreso_Id) REFERENCES Type_Egresos(Id_Type_Egreso),
    FOREIGN KEY (Usuario_Id_E) REFERENCES Usuarios(Id_Usuario)
);

CREATE TABLE Type_Ingresos (
    Id_Type_Ingreso INT IDENTITY(1,1) PRIMARY KEY,
    Type_Ingreso VARCHAR(255) NOT NULL
);

CREATE TABLE Ingresos (
    Id_Ingreso INT IDENTITY(1,1) PRIMARY KEY,
    Reg_Date_Ingreso DATETIME DEFAULT GETDATE(),
    Tittle_Ingreso VARCHAR(255) NOT NULL,
    Description_Ingreso NVARCHAR(MAX),
    Amount_Ingreso INT,
    Value_Ingreso FLOAT NOT NULL,
    Type_Ingreso_Id INT NOT NULL,
    Usuario_Id_I INT NOT NULL,
    -- Foreign key constraints
    FOREIGN KEY (Type_Ingreso_Id) REFERENCES Type_Ingresos(Id_Type_Ingreso),
    FOREIGN KEY (Usuario_Id_I) REFERENCES Usuarios(Id_Usuario)
);
