/* Layout.tsx */

import "./Layout.css"
import { Footer } from "../../../../Components/Footer/Footer";

import { RoutesViews } from "../0. RoutesViews/RoutesViews";
import { Outlet } from "react-router";
import NavbarGastao from "../../../../Components/Navbar/NavbarGastao";

export const Layout = () => {
    return (<>
        {/* <RoutesViews /> */}
        <div style={{ backgroundColor: "blueviolet" }} className="Layout">
            <div className="container-1-navbar container-layout d-flex">
                <NavbarGastao />
            </div>
            <div className="container-2-board container-layout">

                <RoutesViews />
                <Outlet />

            </div>
            <div className="container-3-footer container-layout">
                <Footer></Footer>
            </div>
        </div>
    </>);
};
/* 

{<ElementExample />}
*/