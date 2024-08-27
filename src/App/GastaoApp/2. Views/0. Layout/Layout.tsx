/* Layout.tsx */
import { Outlet } from "react-router";
import "./Layout.css"
import { NavbarGastao } from "../../../../Components/Navbar/NavbarGastao";
import { RoutesViews } from "../0. RoutesViews/RoutesViews";
import { ElementExample } from "../0. Borrador/ElementExample";
import { Footer } from "../../../../Components/Footer/Footer";

export const Layout = (props: any) => {
    return (<>
        {/* <RoutesViews /> */}
        <div style={{ backgroundColor: "blueviolet" }} className="Layout">
            <div className="container-1-navbar container-layout">
                <NavbarGastao />
            </div>
            <div className="container-2-board container-layout">
                {<ElementExample />}
                <Outlet />{/* Aqui es donde deberia renderizarme Login, Register, DefaultGastao */}

                {/* <RoutesViews /> */}
            </div>
            <div className="container-3-footer container-layout">
                <Footer></Footer>
            </div>
        </div>
    </>);
};
