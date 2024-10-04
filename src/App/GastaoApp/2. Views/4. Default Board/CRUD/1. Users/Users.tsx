import { useContext } from "react";

import { UsersContext } from "../../../../3. Contexts/UsersFiltersContext";
import { Child } from "../../../../1. Models/Types/Types";

function UsersView({ children }: Child | null | any) {

    const { indexCurrent, GetUsersFiltered, countChangesFilterInput, totalUsersLength } = useContext(UsersContext)


    return (
        <div className="container-fluid h-100">
            {children}
            <div className="" style={{ backgroundColor: "", border: "solid 1px white", flex: "100%", flexWrap: "wrap", display: "flex" }}>

                <div style={{ border: "solid 1px white", flex: "content", flexWrap: "wrap", display: "flex", textAlign: "center", }} className="text-dark">

                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}>Index: {indexCurrent}</div>
                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}>N°: {indexCurrent + 1}</div>
                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}>Total: {GetUsersFiltered.length}</div>
                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}></div>

                </div>
                <h4 style={{ border: "0.5pt solid gray", flex: "content" }}>{"countChangesFilterInput: " + countChangesFilterInput}</h4>
                <h4 style={{ border: "0.5pt solid gray", flex: "content" }}>{"totalUsersLength: " + totalUsersLength}</h4>
            </div>
        </div>
    );
}
export { UsersView as Users }
