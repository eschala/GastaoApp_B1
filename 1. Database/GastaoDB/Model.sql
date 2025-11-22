-- 1. CREACIÓN DE LA BASE DE DATOS
CREATE DATABASE Gastao_Db
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

-- 2. SELECCIÓN DE LA BASE DE DATOS
USE Gastao_Db;

-- 3. TABLA: rol_de_usuarios||
CREATE TABLE rol_de_usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(255) NOT NULL
);

---

-- 4. TABLA: usuarios
CREATE TABLE usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    dni_usuario INT NOT NULL UNIQUE,
    name_usuario VARCHAR(255) NOT NULL,
    last_name_usuario VARCHAR(255),
    email_usuario VARCHAR(255) NOT NULL,
    pass_usuario VARCHAR(255) NOT NULL,
    rol_id INT NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES rol_de_usuarios (ID)
);

---

-- 5. TABLA: type_egresos
CREATE TABLE type_egresos ( 
    ID INT AUTO_INCREMENT PRIMARY KEY,
    type_egreso VARCHAR(255) NOT NULL
);

---

-- 6. TABLA: egresos
CREATE TABLE egresos (
    ID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    reg_date_egreso DATETIME DEFAULT NOW(),
    tittle_egreso VARCHAR(255) NOT NULL,
    description_egreso TEXT,
    amount_egreso INT,
    value_egreso FLOAT NOT NULL,
    type_egreso_id INT NOT NULL,
    usuario_Id INT NOT NULL,
    FOREIGN KEY (type_egreso_id) REFERENCES type_egresos (ID),
    FOREIGN KEY (usuario_Id) REFERENCES usuarios (ID)
);

---

-- 7. TABLA: type_ingresos
CREATE TABLE type_ingresos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    type_ingreso VARCHAR(255) NOT NULL
);

---

-- 8. TABLA: ingresos
CREATE TABLE ingresos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    reg_date_ingreso DATETIME DEFAULT NOW(),
    tittle_ingreso VARCHAR(255) NOT NULL,
    description_ingreso TEXT,
    amount_ingreso INT,
    value_ingreso FLOAT NOT NULL,
    type_ingreso_id INT NOT NULL,
    usuario_Id INT NOT NULL,
    FOREIGN KEY (type_ingreso_id) REFERENCES type_ingresos (ID),
    FOREIGN KEY (usuario_Id) REFERENCES usuarios (ID)
);