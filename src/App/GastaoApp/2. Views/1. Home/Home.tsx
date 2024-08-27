import { Outlet } from "react-router";
import { NavbarGastao } from "../../../../Components/Navbar/NavbarGastao";


export const Home = () => {
    return (<>
        <div style={{ backgroundColor: "yellow" }} className="container-fluid vh-100">
            <NavbarGastao />
            <Outlet />
        </div>
    </>);
};

