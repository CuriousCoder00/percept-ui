import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { alertDialogStyles,backdropStyles } from "./DialogSchemes";
// import { useState } from "react";
import { Button } from "@/Button";

type dialogprops = VariantProps<typeof alertDialogStyles> & {
  title?: String;
  message: String;
  confirmText?: string;
  cancelText?: string;
  onClose?: () => void;
  onAction?: () => void;
};

export const AlertDialog: React.FC<dialogprops> = ({
  title,
  message, 
  position, 
  size,
  cancelText="Cancel",
  confirmText="Confirm",
//   onClose,
//   onAction,
}) => {

    return(
        <div className={cn(backdropStyles)}>
        <div
        //   ref={dialogRef}
          className={cn(alertDialogStyles({ position,size }))}
        > 
        <>
          {title && <h2>{title}</h2>}
        </>
          <p>{message}</p> 

          <div>
            <Button variant={"outline"} color={"black"}> {cancelText}</Button>
            <Button variant={"solid"} color={"blue"}>{confirmText}</Button>
          </div>
        </div>
      </div>
    )
};
