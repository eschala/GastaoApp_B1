import { UsersTablePdf } from "../0. Borrador/TestApi";
import { UsersTable } from "../0. Borrador/TestTableApi";

export const Home = () => {
    return (<>
        <div style={{ backgroundColor: "aliceblue" }} className="container-fluid h-100">

            <h1>
                {"<Home/>"}
            </h1>
            <div className="container-fluid">
                < UsersTablePdf />
            </div>

        </div>
    </>);
};

