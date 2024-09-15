import React, { useContext } from "react";

import { UsersFiltersContext } from "../../../../3. Contexts/UsersFiltersContext";


type Child = {

    children: React.ReactNode
}

function UsersView({ children }: Child | null | any) {

    const { mostrarMensaje, indexCurrent, } = useContext(UsersFiltersContext)

    const m = () => mostrarMensaje();
    return (
        <div style={{ backgroundColor: "", border: "solid 1px white", width: "100%" }} className="container-fluid h-100">
            <button onClick={() => m()}>mostar</button>
            <h1 className="text-dark">
                {"<Users/> index: " + indexCurrent + " posición: "}{indexCurrent + 1}

            </h1>
            {children}


        </div>
    );
}
export { UsersView as Users }
