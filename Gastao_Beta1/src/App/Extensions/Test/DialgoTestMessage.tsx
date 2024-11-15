import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useEffect, useState } from "react"

const DialogMsg = (IsOpenValue: boolean,
    tittle: string,
    description: string,) => {

    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {

        setIsOpen(IsOpenValue)
    }, [IsOpenValue]
    )

    return (
        <>
            <Dialog open={isOpen}>
                <DialogTitle>
                    {tittle}

                </DialogTitle>
                <DialogContent>
                    {description}

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export { DialogMsg }