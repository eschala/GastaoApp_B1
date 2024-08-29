/* NavbarGastao.tsx */

import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../App/GastaoApp/1. Models/Routes/PathRoutes";
import { LinkButton } from "../Buttons/LinkButton";
import { Toggle } from "../../App/GastaoApp/1. Models/GlobalVariables/GlobalVariables";

export let valorEnabledSidebar: boolean

function NavbarGastao() {


    function toggleSwitchSideBar() {



        console.log("El valor de Toggle.SideBar.Show  es: " + Toggle.SideBar.Show)


    }

    const toggleHome = (
        <LinkButton
            to={HomeRoute.Path}
            className={"navbar-brand container-fluid btn btn-outline-dark  text-light i-1"}
            context={"Inicio"}
            onClick={() => console.log("Home")} />
    );
    const toggleLogin = (
        <LinkButton
            to={LoginRoute.Path}
            className={"navbar-brand container-fluid btn btn-outline-dark  text-light i-2"}
            context={"login"}
            onClick={() => console.log("Login")} />
    );
    const toggleRegister = (
        <LinkButton
            to={RegisterRoute.Path}
            className={"navbar-brand container-fluid btn btn-outline-dark  text-light i-3"}
            context={"Register"}
            onClick={() => console.log("Register")} />
    );
    const toggleDefault = (
        <>
            <LinkButton
                to={DefaultGastaoRoute.Path}
                className={"navbar-brand container-fluid btn btn-outline-dark  text-light i-4"}
                context={"Gastao"}
                onClick={() => console.log("Gastao")} />

        </>
    );
    const toggleSideBar = (
        <button
            onClick=
            {() => {
                toggleSwitchSideBar()
            }
            }
            className="btn btn-outline-dark" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </button>
    );

    /* -    -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   - */
    /* -    -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   - */
    /* A partir de aqui se renderiza el componente Navbar */
    return (
        <>
            <nav style={{ backgroundColor: "darkblue", color: "white" }} className="navbar-brand-logo-1 navbar navbar-expand-lg w-100">{/* navbar navbar-expand-lg */}
                <div className="navbar-brand-logo-sub d-flex container-fluid">

                    <div className="navbar-brand-logo-sub-1 d-flex justify-content-between container-fluid">
                        <div className="navbar-brand-logo-sub-1-1 d-flex">
                            {toggleSideBar}
                            {toggleHome}
                            <div className="navbar-brand-logo-sub-1-1-1 d-flex"></div>
                            {toggleLogin}
                            {toggleRegister}
                            {toggleDefault}
                        </div>
                        <div className="navbar-brand-logo-sub-1-2">

                            {toggleDefault}
                        </div>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>
        </>
    )
}
export default NavbarGastao
