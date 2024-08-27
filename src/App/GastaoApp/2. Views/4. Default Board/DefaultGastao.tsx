import './DefaultGastao.css';


export function DefaultGastao() {
    return (<>
        <div style={{ backgroundColor: "gray" }} className="DefaultGastao">
            <div className="DefaultGastao-sub-1 DefaultGastao-sub">
                <h1>{"<sidebar/>"}</h1>
            </div>
            <div className="DefaultGastao-sub-2 DefaultGastao-sub">

                <h1>
                    {"<Gastao/>"}
                </h1>
            </div>
        </div>
    </>);
}
