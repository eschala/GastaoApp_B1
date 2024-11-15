import { ScanQRComponent } from "../../../Extensions/QRCode/QrScannerComponent";

export const Home = () => {
    return (<>
        <div style={{ width: "100%" }} className="">

            <h3>
                {"<Home/>"}
            </h3>
            <div className="" style={{ backgroundColor: "transparent" }}>
                {/* <QR_Reader /> */}
                <div className="">

                    <ScanQRComponent />
                </div>
                <div className="">
                    <h1>Samir QR</h1>
                    <img src="/src/assets/SAMIR_QR.png" alt="QR code" />

                </div>
                <div className="">
                    <h1>TEST QR</h1>
                    <img style={{ width: "200px", height: "200px" }} src="https://www.qrcode-monkey.com/img/default-preview-qr.svg" alt="QR code" />

                </div>
            </div>

        </div>
    </>);
};

