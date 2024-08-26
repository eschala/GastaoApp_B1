import { Routes, Route, Outlet } from "react-router"
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../1. Models/Routes/PathRoutes"
import { Link } from "react-router-dom"

export function Layout(props: any) {


    const classContainer = "Layout"

    return (<>
        <Routes>

            <Route path={HomeRoute.Path} element={<Home />} />
            <Route path={LoginRoute.Path} element={<Login />} />
            <Route path={RegisterRoute.Path} element={<Register />} />
            <Route path={DefaultGastaoRoute.Path} element={<DefaultGastao />} />



        </Routes>
        <Outlet />
    </>
    )
}

export const Home = () => {
    return (<>
        <div className="container">
            <nav>
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


            </nav>
            Home
        </div>
    </>)
}
export const Login = () => {
    return (<>
        <div className="container">
            Login
        </div>
    </>)
}
export const Register = () => {
    return (<>
        <div className="container">
            Register
        </div>
    </>)
}
export const DefaultGastao = () => {
    return (<>
        <div className="container">
            DefaultGastao
        </div>
    </>)
}