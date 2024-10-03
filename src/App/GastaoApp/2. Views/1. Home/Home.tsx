/* import { QR_Reader } from "../../../scannerQR"; */

import QrReader from "../../../Extensions/QRCode/QrScannerComponent";

export const Home = () => {
    return (<>
        <div style={{ width: "100%" }} className="">

            <h3>
                {"<Home/>"}
            </h3>
            <div className="" style={{ backgroundColor: "lightblue" }}>
                {/* <QR_Reader /> */}
                <div className="">

                    <QrReader />
                </div>

            </div>

        </div>
    </>);
};

