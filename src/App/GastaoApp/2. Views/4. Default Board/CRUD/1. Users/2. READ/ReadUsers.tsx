import { UsersTablePdf } from "../../../../0. Borrador/TestApi";

export function ReadUsers() {


    return (<>
        <div style={{ backgroundColor: "gray" }} className="container-fluid h-100">
            <h1 className="text-dark">
                {"<ReadUsers/>"}

            </h1>
            <UsersTablePdf />
        </div>
    </>);
}
