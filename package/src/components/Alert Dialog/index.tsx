import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { alertDialogStyles } from "./DialogSchemes";
import { Button } from "@/Button";
import { useState } from "react";

type DialogProps = VariantProps<typeof alertDialogStyles> & {
  heading?: string;
  confirmText?: string;
  cancelText?: string;
  onAction?: () => void;
  children: React.ReactNode;
  handleClose: () => void;
  modalToggle: boolean;
};

type AlertBodyProps = {
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onAction?: () => void;
  handleClose: () => void;
};

export const AlertDialog: React.FC<DialogProps> = ({
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

export const AlertDialogBody: React.FC<AlertBodyProps> = ({
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

export const AlertDialogTrigger: React.FC<{ handleClose: () => void }> = ({
  handleClose,
}) => {
  return <button onClick={handleClose}>Open Alert</button>;
};

export const AlertPopover: React.FC<DialogProps> = ({
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
