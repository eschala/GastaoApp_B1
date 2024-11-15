import { useEffect, useRef, useState } from "react";

// Styles
import "./QrStyles.css";

// Qr Scanner
import QrScanner from "qr-scanner";
/* import QrFrame from "../assets/qr-frame.svg"; */

import QrFrame from "../../../assets/qr-frame.svg"
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { IsLink } from "../../GastaoApp/1. Models/Functions/IsUrlOrLink";
import { DialogMsg } from "../Test/DialgoTestMessage";

let resultScan: any
let link: any


const QrReader = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [tittle, setTittle] = useState("")
    const [description, setDescription] = useState("")

    const SetOnIsOpen = () => setIsOpen(true);
    /* const SetOnIsClosed = () => setIsOpen(false); */
    const SetOnTittle = (tittleSet: any) => setTittle(tittleSet);
    const SetOnDescription = (descriptionSet: any) => setDescription(descriptionSet);

    // QR States
    const scanner = useRef<QrScanner>();
    const videoEl = useRef<HTMLVideoElement>(null);
    const qrBoxEl = useRef<HTMLDivElement>(null);
    const [qrOn, setQrOn] = useState<boolean>(true);

    // Result
    const [scannedResult, setScannedResult] = useState<string | undefined>("");

    // Success
    const onScanSuccess = (result: QrScanner.ScanResult) => {
        // 🖨 Print the "result" to browser console.
        console.log(result);
        // ✅ Handle success.
        // 😎 You can do whatever you want with the scanned result.
        setScannedResult(result?.data);
        resultScan = scannedResult
        if (IsLink(scannedResult)) {
            link = <a href={scannedResult}>{scannedResult}</a>
            alert(link + " " + scannedResult)

        }
        else {

        }
    };

    // Fail
    const onScanFail = (err: string | Error) => {
        // 🖨 Print the "err" to browser console.
        console.log(err);
    };

    useEffect(() => {
        if (videoEl?.current && !scanner.current) {
            // 👉 Instantiate the QR Scanner
            scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
                onDecodeError: onScanFail,
                // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
                preferredCamera: "environment",
                // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
                highlightScanRegion: true,
                // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
                highlightCodeOutline: true,
                // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
                overlay: qrBoxEl?.current || undefined,
            });

            // 🚀 Start QR Scanner
            scanner?.current
                ?.start()
                .then(() => setQrOn(true))
                .catch((err) => {
                    if (err) setQrOn(false);
                });
        }

        // 🧹 Clean up on unmount.
        // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
        return () => {
            if (!videoEl?.current) {
                scanner?.current?.stop();
            }
        };
    }, []);

    // ❌ If "camera" is not allowed in browser permissions, show an alert.
    useEffect(() => {
        if (!qrOn)
            alert(
                "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
            );
    }, [qrOn]);

    useEffect(() => {

        if (scannedResult == "") {
            alert("isOpen = " + isOpen)
            SetOnTittle("NOT result")
            SetOnDescription("NOT FOUND")
            SetOnIsOpen()

        }
        else {
            alert("resultado = " + scannedResult + " isOpen = " + isOpen)
        }
    }, [scannedResult])
    useEffect(() => {
        if (scannedResult !== "") {



            SetOnTittle("RESULT")
            SetOnDescription(scannedResult)
            SetOnIsOpen()

        }
    })

    return (
        <>

            <div className="qr-reader">
                <div className="conext-result" style={{
                    backgroundColor: "blue",
                    zIndex: "auto",
                    position: "relative",
                    top: 0,
                    left: 0,
                }}>
                    {scannedResult && (
                        <>
                            <h4>
                                {IsLink(scannedResult) ?
                                    <a style={{ color: "whitesmoke" }} href={scannedResult}>
                                        {scannedResult}
                                    </a>
                                    :
                                    <p style={{ color: "whitesmoke" }} >
                                        {scannedResult}
                                    </p>
                                }

                            </h4>
                            <h5> {"IsLink " + IsLink(scannedResult)}</h5>
                        </>
                    )}
                </div>
                {/* QR */}
                <video ref={videoEl} >

                </video>

                <div ref={qrBoxEl} className="qr-box">
                    <img
                        src={QrFrame}
                        alt="Qr Frame"
                        width={256}
                        height={256}
                        className="qr-frame"
                    />
                </div>
                {DialogMsg(isOpen, tittle, description)}

            </div>
        </>
    );
};

export default QrReader;


function ScanQR() {
    const [IsOpen, SetIsOpen] = useState<boolean>(false)

    const openDialog = () => {
        SetIsOpen(true)
    }
    const closeDialog = () => {
        SetIsOpen(false)
    }
    return (
        <>
            <Button onClick={openDialog}>Scanear Codigo QR</Button>
            <Dialog fullScreen open={IsOpen}>
                <DialogContent>
                    <QrReader />
                </DialogContent>
                <DialogActions>
                    <>
                        <div className="result">
                            {resultScan}
                        </div>
                        <Button onClick={closeDialog}>Cerrar</Button>
                    </>

                </DialogActions>

            </Dialog>
        </>
    )
}

export { ScanQR as ScanQRComponent } 