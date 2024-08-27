/* NavbarGastao.tsx */
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../App/GastaoApp/1. Models/Routes/PathRoutes";
import { LinkButton } from "../Buttons/LinkButton";

export function NavbarGastao() {

    const mostrarConsoleLog = () => { console.log("Activado") }
    /*     const mostrarAlert = () => { alert("Activado") } */

    return (
        <nav>

            <LinkButton to={HomeRoute.Path} className={"btn btn-success"} context={"Home"} onClick={() => mostrarConsoleLog()} />
            <LinkButton to={LoginRoute.Path} className={"btn btn-success"} context={"Login"} onClick={() => mostrarConsoleLog()} />
            <LinkButton to={RegisterRoute.Path} className={"btn btn-success"} context={"Register"} onClick={() => mostrarConsoleLog()} />
            <LinkButton to={DefaultGastaoRoute.Path} className={"btn btn-success"} context={"DefaultGastao"} onClick={() => mostrarConsoleLog()} />


        </nav>)
}
