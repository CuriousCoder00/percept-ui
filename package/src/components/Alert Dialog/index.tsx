import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { alertDialogStyles } from "./DialogSchemes";
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
  cancelText = "Cancel",
  confirmText = "Confirm",
  //   onClose,
  //   onAction,
}) => {
  return (
    <div
      id="modal-bg"
      className="fixed inset-0  items-center justify-center bg-black bg-opacity-50 z-[9999999999]"
    >
      <div
        //   ref={dialogRef}
        className={cn(alertDialogStyles({ position, size }))}
      >
        <>{title && <h2 className="font-bold mb-2  p-1 w-full"> {title}</h2>}</>
        <p className="w-full p-2 mb-[5px]">{message}</p>

        <div className="flex gap-3 w-[100%]  justify-end">
          {cancelText && (
            <Button variant={"outline"} color={"black"} size={"sm"}>
              {cancelText}
            </Button>
          )}
          {confirmText && (
            <Button variant={"solid"} color={"blue"} size={"sm"}>
              {confirmText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
