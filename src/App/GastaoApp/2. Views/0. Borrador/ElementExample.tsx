import { useState } from "react";

import { variables } from "./Varariables";
import './Varariables.tsx';


// Componente ElementExample

export function ElementExample() {

    let [i, setI] = useState(variables.num); // Estado para el número
    let numeroPar = i % 2 === 0; // Determina si el número es par

    const fn = () => {
        setI(i + 1)
        variables.num = i + 1
        variables.bool = !numeroPar
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-light">{"<RenderApp/>"}</h1>
            <h1>Elemento 1</h1>
            <h1>El número actual es: {i} y es {numeroPar ? 'par' : 'impar'}</h1>
            <button className="btn btn-outline-dark" onClick={() => {
                fn()

            }}>Aumentar</button>
            {/* Pasando la prop */}
        </div>
    );
}
