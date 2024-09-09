import React, { useState } from 'react';
import { GetATbUsers } from '../../../../../1. Models/Functions/API Responses/GetATbUsers';

export const Registro_: React.FC = () => {
    const [indiceActual, setIndiceActual] = useState<number>(0);
    const ATbUsers = GetATbUsers(true); // Llamamos al hook aquí

    const siguienteRegistro = () => {
        if (indiceActual < ATbUsers.length - 1) {
            setIndiceActual(indiceActual + 1);
        }
    };

    const anteriorRegistro = () => {
        if (indiceActual > 0) {
            setIndiceActual(indiceActual - 1);
        }
    };

    return (
        <div>
            <h1>Registro Actual</h1>
            {ATbUsers.length > 0 ? (
                <>
                    <div className="Form" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>

                        <label htmlFor="">ID</label>
                        <input type="number" name="" id="" value={ATbUsers[indiceActual].idUser ?? 0} />

                        <label htmlFor="">Tipo</label>
                        <input type="number" name="" id="" value={ATbUsers[indiceActual].tipoUserId ?? 0} />

                        <label htmlFor="">Nombre</label>
                        <input type="text" value={ATbUsers[indiceActual].nameUser ?? ''} />

                        <label htmlFor="">Apellido</label>
                        <input type="text" value={ATbUsers[indiceActual].lastNameUser ?? ''} />

                        <label htmlFor="">Cédula</label>
                        <input type="number" name="" id="" value={ATbUsers[indiceActual].dniUser ?? 0} />

                        <label htmlFor="">Correo</label>
                        <input type="email" name="" id="" value={ATbUsers[indiceActual].emailUser ?? ''} />

                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="" id="" value={ATbUsers[indiceActual].passUser ?? ''} />

                        <div className="sections-buttons">

                            <button onClick={anteriorRegistro} disabled={indiceActual === 0}>
                                Anterior
                            </button>
                            <button onClick={siguienteRegistro} disabled={indiceActual === ATbUsers.length - 1}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <h1>No hay registros disponibles.</h1>
            )}
        </div>
    );
};
