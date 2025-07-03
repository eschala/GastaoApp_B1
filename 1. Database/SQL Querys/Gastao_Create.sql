/* DATABASE=Gastao_Db

table=Usuarios

Id_Usuario(int, primary key, auto_increment)
Dni_Usuario(int, primary key, unique)
Name_Usuario(varchar(255), not null)
Last_Name_Usuario(varchar(255), not null)
Email_Usuario(varchar(255), not null)
Pass_Usuario(varchar(255), not null)
Rol_Usuario_Id(int, not null, foreign key references Rol_De_Usuarios(Id_Rol_Usuario))

table=Rol_De_Usuarios

Id_Rol_Usuario(int, primary key, auto_increment)
Rol_De_Usuario(varchar(255), not null, unique)

table=Egresos

Id_Egreso(double, primary key, auto_increment)
Reg_DateEgreso(datetime)
Tittle_Egreso(varchar(255), not null)
Description_Egreso(text,)
Amount_Egreso(int)
Value_Egreso(double, not null)
Type_EgresoId(int, not null, foreign key references Type_Egresos(Id_Type_Egreso))
Usuario_Id_E(int, not null, foreign key references Usuarios(Id_Usuario))

table=Type_Egresos

Id_Type_Egreso(int, primary key, auto_increment)
Type_Egreso(varchar(255), not null, unique)

table=Ingresos

Id_Ingreso(double, primary key, auto_increment)
Reg_Date_Ingreso(datetime)
Tittle_Ingreso(varchar(255), not null)
Description_Ingreso(text,)
Amount_Ingreso(int)
Value_Ingreso(double, not null)
Type_Ingreso_Id(int, not null, foreign key references Type_Ingresos(Id_Type_Ingreso))
Usuario_Id_I(int, not null, foreign key references Usuarios(Id_Usuario))

table=Type_Ingresos

Id_Type_Ingreso(int, primary key, auto_increment)
Type_Ingreso(varchar(255), not null, unique) */