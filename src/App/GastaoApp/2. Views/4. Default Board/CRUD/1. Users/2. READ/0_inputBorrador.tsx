
let inputElement: any;
let val: any;

inputElement[1] = (<input
    style={{ width: "180px", marginBottom: "10px" }}
    type='text'
    value={val}
    onChange={() => 0}
    placeholder="Nombre"
    contentEditable={true}
/>)
inputElement[2] = (< input
    style={{ width: "180px", marginBottom: "10px" }}
    type="text"
    value={val}
    onChange={() => 0}
    placeholder="Apellido"
    contentEditable={true}
/>)
inputElement[3] = (< input
    style={{ width: "180px", marginBottom: "10px" }}
    type='number'
    value={val}
    onChange={() => 0}
    placeholder="DNI"
    contentEditable={true}
/>)
inputElement[4] = (<input
    style={{ width: "180px", marginBottom: "10px" }}
    type='text'
    value={val}
    onChange={() => 0}
    placeholder="Correo"
    contentEditable={true}
/>)
inputElement[1] = (<input
    style={{ width: "180px", marginBottom: "10px" }}
    type='password'
    value={val}
    onChange={() => 0}
    placeholder="Contraseña"
    contentEditable={true}
/>)
/* -    -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -       -   -   -   -   -   -   -   -   -   -   -   -    */
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { UserFilter } from '../UsersFilter';

export function FormUpdateUsersBORRADOR() {
    const { indiceActual, GetUsersFiltrados, PrevRegister, NextRegister } = UserFilter();

    const [currentData, setCurrentData] = useState({
        nameUser: '',
        lastNameUser: '',
        emailUser: '',
        dniUser: 0,
        passUser: '',
    });

    // Efecto para actualizar currentData cuando cambia el índice actual
    useEffect(() => {
        if (GetUsersFiltrados.length > 0) {
            const currentUser = GetUsersFiltrados[indiceActual];
            setCurrentData({
                nameUser: currentUser.nameUser ?? '',
                lastNameUser: currentUser.lastNameUser ?? '',
                emailUser: currentUser.emailUser ?? '',
                dniUser: currentUser.dniUser ?? 0,
                passUser: currentUser.passUser ?? '',
            });
        }
    }, [indiceActual]); // Solo dependemos de indiceActual

    // Manejador de cambios para los inputs
    /*     const handleChange = (field, value) => {
            setCurrentData({
                ...currentData,
                [field]: value,
            });
        }; */

    return (
        <>
            {GetUsersFiltrados.length > 0 && (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "blue",
                    padding: "20px",
                    borderRadius: "5px"
                }}>
                    <h1>Registro {indiceActual + 1} de {GetUsersFiltrados.length}</h1>
                    <input
                        style={{ width: "180px", marginBottom: "10px" }}
                        type='text'
                        value={currentData.nameUser}
                        /* onChange={(e) => handleChange('nameUser', e.target.value)} */
                        onChange={() => 0}
                        placeholder="Nombre"
                    />
                    <input
                        style={{ width: "180px", marginBottom: "10px" }}
                        type="text"
                        value={currentData.lastNameUser}
                        /* onChange={(e) => handleChange('lastNameUser', e.target.value)} */
                        onChange={() => 0}
                        placeholder="Apellido"
                    />
                    <input
                        style={{ width: "180px", marginBottom: "10px" }}
                        type='number'
                        value={currentData.dniUser}
                        /* onChange={(e) => handleChange('dniUser', e.target.value)} */
                        onChange={() => 0}
                        placeholder="DNI"
                    />
                    <input
                        style={{ width: "180px", marginBottom: "10px" }}
                        type='text'
                        value={currentData.emailUser}
                        /* onChange={(e) => handleChange('emailUser', e.target.value)} */
                        onChange={() => 0}
                        placeholder="Correo"
                    />
                    <input
                        style={{ width: "180px", marginBottom: "10px" }}
                        type='password'
                        value={currentData.passUser}
                        /* onChange={(e) => handleChange('passUser', e.target.value)} */
                        onChange={() => 0}
                        placeholder="Contraseña"
                    />
                </div>
            )}
            <div className="sections-buttons" style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Button variant='outlined' onClick={PrevRegister} disabled={indiceActual === 0}>
                    Anterior
                </Button>
                <Button variant='outlined' onClick={NextRegister} disabled={indiceActual === GetUsersFiltrados.length - 1}>
                    Siguiente
                </Button>
            </div>
        </>
    );
}
