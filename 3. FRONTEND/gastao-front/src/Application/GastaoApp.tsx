import PersistentDrawerLeft from "./1. Sidebar/DrawerSideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { CreateUsuario } from "./Pages/Usuarios/CreateUsuario";
import { EditUsuario } from "./Pages/Usuarios/EditUsuarios";
import { DeleteUsuario } from "./Pages/Usuarios/DeleteUsuarios";
import { SearchUsuario } from "./Pages/Usuarios/SearchUsuarios";
import { HomeUsuarios } from "./Pages/Usuarios/HomeUsuarios";

export function GastaoApp() {


    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/usuarios" element={<HomeUsuarios />} >
                    <Route path="create" element={<CreateUsuario/>}></Route>
                    <Route path="edit" element={<EditUsuario/>}></Route>
                    <Route path="delete" element={<DeleteUsuario/>}></Route>
                    <Route path="search" element={<SearchUsuario/>}></Route>
                </Route>

            </Routes>


            <PersistentDrawerLeft />
        </BrowserRouter>

    </>
    )
}