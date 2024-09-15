/* RoutesViews.tsx */
import { Routes, Route, Outlet, } from "react-router"
import { HomeRoute, LoginRoute, RegisterRoute, DefaultGastaoRoute } from "../../1. Models/Routes/PathRoutes"
import { Home } from "../1. Home/Home"
import { Login } from "../2. Login/Login"
import { Register } from "../3. Register/Register"
import { CreateIngresos } from "../4. Default Board/CRUD/2. Ingresos/1. CREATE/CreateIngresos"
import { ReadIngresos } from "../4. Default Board/CRUD/2. Ingresos/2. READ/ReadIngresos"
import { UpdateIngresos } from "../4. Default Board/CRUD/2. Ingresos/3. UPDATE/UpdateIngresos"
import { DeleteIngresos } from "../4. Default Board/CRUD/2. Ingresos/4. DELETE/DeleteIngresos"
import { ReportIngresos } from "../4. Default Board/CRUD/2. Ingresos/ReportIngresos"
import { CreateEgresos } from "../4. Default Board/CRUD/3. Egresos/1. CREATE/CreateEgresos"
import { ReadEgresos } from "../4. Default Board/CRUD/3. Egresos/2. READ/ReadEgresos"
import { UpdateEgresos } from "../4. Default Board/CRUD/3. Egresos/3. UPDATE/UpdateEgresos"
import { DeleteEgresos } from "../4. Default Board/CRUD/3. Egresos/4. DELETE/DeleteEgresos"
import { ReportEgresos } from "../4. Default Board/CRUD/3. Egresos/ReportEgresos"
import { DefaultGastao } from "../4. Default Board/DefaultGastao"
import { CreateUsers } from "../4. Default Board/CRUD/1. Users/1. CREATE/CreateUsers"
import { ReadUsers } from "../4. Default Board/CRUD/1. Users/2. READ/ReadUsers"
import { UpdateUsers } from "../4. Default Board/CRUD/1. Users/3. UPDATE/UpdateUsers"
import { DeleteUsers } from "../4. Default Board/CRUD/1. Users/4. DELETE/DeleteUsers"
import { ReportUsers } from "../4. Default Board/CRUD/1. Users/ReportUsers"
import { Users } from "../4. Default Board/CRUD/1. Users/Users"
import { UserFiltersContextProvider } from "../../3. Contexts/UsersFiltersContext"



export function RoutesViews() {

    return (<>
        {/* <div className="vh-100 bg-primary"> */}

        <Routes>

            <Route path={HomeRoute.Path} element={<Home />}>
            </Route>
            <Route path={LoginRoute.Path} element={<Login />} />
            <Route path={RegisterRoute.Path} element={<Register />} />
            <Route path={DefaultGastaoRoute.Path} element={<DefaultGastao />}>
                <Route path="Users" element={
                    < UserFiltersContextProvider>
                        <Users>

                            {/* <h1>Samir</h1> */}
                            <Outlet></Outlet>
                        </Users>
                    </UserFiltersContextProvider>
                }>
                    <Route path={"Create"} element={<CreateUsers />} />
                    <Route path={"Read"} element={<ReadUsers />} />
                    <Route path={"Update"} element={<UpdateUsers />} />
                    <Route path={"Delete"} element={<DeleteUsers />} />
                    <Route path={"Report"} element={<ReportUsers />} />
                </Route>

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


