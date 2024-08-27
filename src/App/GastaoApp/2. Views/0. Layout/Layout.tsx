import { Outlet } from "react-router";
import "./Layout.css"
export const Layout = () => {
    return (<>
        <div style={{ backgroundColor: "blueviolet" }} className="Layout">
            <div className="container-1-navbar container-layout">1.Navbar</div>
            <div className="container-2-board container-layout">
                <Outlet />
            </div>
            <div className="container-3-footer container-layout">3.Footer</div>
        </div>
    </>);
};
