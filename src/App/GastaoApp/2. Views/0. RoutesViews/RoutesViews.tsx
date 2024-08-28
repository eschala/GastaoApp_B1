/* RoutesViews.tsx */
import { Routes, Route } from "react-router"
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../1. Models/Routes/PathRoutes"
import { Login } from "../2. Login/Login"
import { Register } from "../3. Register/Register"
import { DefaultGastao } from "../4. Default Board/DefaultGastao"
import { Home } from "../1. Home/Home"
import { CreateEgresos, CreateIngresos, DeleteEgresos, DeleteIngresos, ReadEgresos, ReadIngresos, ReportEgresos, ReportIngresos, UpdateEgresos, UpdateIngresos } from "../4. Default Board/CRUD/2. Ingresos/1. CREATE/CreateIngresos"

export function RoutesViews() {

    return (<>
        {/* <div className="vh-100 bg-primary"> */}

        <Routes>

            <Route path={HomeRoute.Path} element={<Home />}>
            </Route>
            <Route path={LoginRoute.Path} element={<Login />} />
            <Route path={RegisterRoute.Path} element={<Register />} />
            <Route path={DefaultGastaoRoute.Path} element={<DefaultGastao />}>
                <Route path={"Ingresos/Create"} element={<CreateIngresos />} />
                <Route path={"Ingresos/Read"} element={<ReadIngresos />} />
                <Route path={"Ingresos/Update"} element={<UpdateIngresos />} />
                <Route path={"Ingresos/Delete"} element={<DeleteIngresos />} />
                <Route path={"Ingresos/Report"} element={<ReportIngresos />} />

                <Route path={"Egresos/Create"} element={<CreateEgresos />} />
                <Route path={"Egresos/Read"} element={<ReadEgresos />} />
                <Route path={"Egresos/Update"} element={<UpdateEgresos />} />
                <Route path={"Egresos/Delete"} element={<DeleteEgresos />} />
                <Route path={"Egresos/Report"} element={<ReportEgresos />} />
            </Route>
        </Routes>


        {/* </div> */}


    </>
    )
}


