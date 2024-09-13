import { AlertDialog, AlertDialogBody, AlertDialogTrigger } from "percept-ui"
import { useState } from "react";
import { Button } from ".";

export default function AlertDialogComponent() {
    const [modalToggle, setModalToggle] = useState(false);
    const handleClose = () => setModalToggle(!modalToggle);

    return (
        <div>
            <Button variant="solid" color="red" onClick={handleClose} className="w-32">Delete</Button>
            <AlertDialog position="center" heading="Confirmation Message" handleClose={handleClose} modalToggle={modalToggle} >
                <AlertDialogBody confirmText={"Yes"}
                    cancelText={"No"}
                    handleClose={handleClose}
                    onAction={handleClose}>
                    Are you sure you want to delete this item?
                </AlertDialogBody>
            </AlertDialog>
        </div>
    )
}