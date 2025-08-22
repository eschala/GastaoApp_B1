import { Outlet } from "react-router-dom";


export function HomeUsuarios () {
  return (
    <div>
      <h1>Home Usuarios</h1>
      <p style={{backgroundColor:"lightblue"}}>This is the Home Usuarios page.</p>

      <Outlet/>
      
    </div>
  );
}