/* RoutesViews.tsx */
import { Routes, Route } from "react-router"
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../1. Models/Routes/PathRoutes"
import { Login } from "../2. Login/Login"
import { Register } from "../3. Register/Register"
import { DefaultGastao } from "../4. Default Board/DefaultGastao"
import { Home } from "../1. Home/Home"

export function RoutesViews() {

    return (<>
        {/* <div className="vh-100 bg-primary"> */}

        <Routes>

            <Route path={HomeRoute.Path} element={<Home />}>
            </Route>
            <Route path={LoginRoute.Path} element={<Login />} />
            <Route path={RegisterRoute.Path} element={<Register />} />
            <Route path={DefaultGastaoRoute.Path} element={<DefaultGastao />} />
        </Routes>


        {/* </div> */}


    </>
    )
}


