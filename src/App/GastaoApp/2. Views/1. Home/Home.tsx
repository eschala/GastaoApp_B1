/* import { QR_Reader } from "../../../scannerQR"; */

import QrReader from "../../../scannerQR";




export const Home = () => {
    return (<>
        <div style={{ width: "100%" }} className="">

            <h3>
                {"<Home/>"}
            </h3>
            <div className="" style={{ backgroundColor: "gray" }}>
                {/* <QR_Reader /> */}
                <QrReader />
            </div>

        </div>
    </>);
};

