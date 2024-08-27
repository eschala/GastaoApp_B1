import { Link } from "react-router-dom";
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../App/GastaoApp/1. Models/Routes/PathRoutes";
import { LinkButton } from "../Buttons/LinkButton";
import { AddressButton } from "../Buttons/AddressButton";
import { DefaultButton } from "../Buttons/DefaultButton";

export function NavbarGastao() {

    const mostrarConsoleLog = () => { console.log("Activado") }
    const mostrarAlert = () => { alert("Activado") }

    return <nav>
        <Link to={HomeRoute.Path} className="btn btn-primary">
            Home
        </Link>
        <Link to={LoginRoute.Path} className="btn btn-primary">
            Login
        </Link>
        <Link to={RegisterRoute.Path} className="btn btn-primary">
            Register
        </Link>
        <Link to={DefaultGastaoRoute.Path} className="btn btn-primary">
            DefaultGastao
        </Link>
        <AddressButton href={DefaultGastaoRoute.Path} className={"btn btn-success"} context={"AddressButton"} onClick={() => mostrarAlert()} />
        <LinkButton to={DefaultGastaoRoute.Path} className={"btn btn-success"} context={"LinkButton"} onClick={() => mostrarConsoleLog()} />
        <DefaultButton /* to={DefaultGastaoRoute.Path} */ className={"btn btn-success"} context={"DefaultButton"} onClick={() => mostrarConsoleLog()} />

    </nav>;
}
