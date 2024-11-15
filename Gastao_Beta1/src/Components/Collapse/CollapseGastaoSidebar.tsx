import Button from "@mui/material/Button";
import { useState } from "react";


export function CollapseGastaoSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
            </Button>

        </>
    );
}
