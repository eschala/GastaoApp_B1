/* NavbarGastao.tsx */
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../App/GastaoApp/1. Models/Routes/PathRoutes";
import { LinkButton } from "../Buttons/LinkButton";

const mostrarConsoleLog = () => { console.log("Activado") }

export function NavbarGastao() {

    return (
        <>
            <nav style={{ backgroundColor: "darkblue", color: "white" }} className="navbar navbar-expand-lg w-100">
                <div className="container-fluid">

                    <div className="1-navbar-brand-logo d-flex">
                        {toggleSideBar}
                        {toggleHome}
                        {toggleLogin}
                        {toggleRegister}
                        {toggleDefault}
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>
        </>
    )
}

const toggleHome = (
    <LinkButton
        to={HomeRoute.Path}
        className={"navbar-brand container-fluid btn btn-outline-dark  text-light"}
        context={"Inicio"}
        onClick={() => console.log("a")} />
);
const toggleLogin = (
    <LinkButton
        to={LoginRoute.Path}
        className={"navbar-brand container-fluid btn btn-outline-dark  text-light"}
        context={"login"}
        onClick={() => console.log("a")} />
);
const toggleRegister = (
    <LinkButton
        to={RegisterRoute.Path}
        className={"navbar-brand container-fluid btn btn-outline-dark  text-light"}
        context={"Register"}
        onClick={() => console.log("a")} />
);
const toggleDefault = (
    <LinkButton
        to={DefaultGastaoRoute.Path}
        className={"navbar-brand container-fluid btn btn-outline-dark  text-light"}
        context={"Gastao"}
        onClick={() => console.log("a")} />
);
const toggleSideBar = (
    <button className="btn btn-outline-dark" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
    </button>
);

