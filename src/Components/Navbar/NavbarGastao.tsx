import { Link } from "react-router-dom";
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../App/GastaoApp/1. Models/Routes/PathRoutes";
import { LinkButton } from "../Buttons/LinkButton";

export function NavbarGastao() {
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
        <LinkButton href={DefaultGastaoRoute.Path} className={"btn btn-primary"} context={"DefaultGastao"}>

        </LinkButton>


    </nav>;
}
