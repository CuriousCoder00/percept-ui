import { cn } from "@/utils";
import { alertDialogStyles } from "./DialogSchemes";
import { Button } from "./index";
import { useState } from "react";

export const AlertDialog = ({
  heading,
  position,
  children,
  handleClose,
  modalToggle,
}) => {
  return (
    <div className={`${!modalToggle && "hidden"}`} id="modal-bg">
      <div className={cn(alertDialogStyles({ position }))}>
        {heading && <h2 className="font-bold mb-2 p-1 w-full">{heading}</h2>}
        <div>{children}</div>
      </div>
      <button
        className="absolute inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export const AlertDialogBody = ({
  children,
  confirmText,
  cancelText,
  handleClose,
  onAction
}) => {
  return (
    <div className="w-full p-2 mb-[5px]">
      {children}
      <div className="flex gap-3 w-full justify-end">
        {cancelText && (
          <Button
            variant={"outline"}
            color={"black"}
            size={"sm"}
            className="w-auto"
            onClick={handleClose}
          >
            {cancelText}
          </Button>
        )}
        {confirmText && (
          <Button
            variant={"solid"}
            color={"blue"}
            size={"sm"}
            className="w-auto"
            onClick={onAction}
          >
            {confirmText}
          </Button>
        )}
      </div>
    </div>
  );
};

export const AlertDialogTrigger = ({
  handleClose,
}) => {
  return <button onClick={handleClose}>Open Alert</button>;
};

export const AlertPopover = ({
  heading,
  position,
  cancelText,
  confirmText,
  children,
}) => {
  const [modalToggle, setModalToggle] = useState(false);

  const handleClose = () => setModalToggle(!modalToggle);

  return (
    <div>
      <AlertDialogTrigger handleClose={handleClose} />
      <AlertDialog
        position={position}
        heading={heading}
        handleClose={handleClose}
        modalToggle={modalToggle}
      >
        <AlertDialogBody
          confirmText={confirmText}
          cancelText={cancelText}
          handleClose={handleClose}
          onAction={handleClose}
        >
          {children}
        </AlertDialogBody>
      </AlertDialog>
    </div>
  );
};

AlertDialog.displayName = "AlertDialog";