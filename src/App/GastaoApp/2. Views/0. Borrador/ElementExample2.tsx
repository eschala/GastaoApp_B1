import { variables } from "./Varariables";

export function ElementExample2() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <h1 className="text-light" style={{ fontSize: "40pt" }}>
                Elemento 2 {variables.bool ? "El número es par " + variables.num : "El número es impar " + variables.num}
            </h1>
        </div>
    );
}
