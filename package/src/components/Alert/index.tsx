import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { alertStyles } from "./AlertSchemes";
// import React from "react";
import { useState, useEffect } from "react";
import {
  IoCheckmarkDoneCircle,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { PiSealWarning } from "react-icons/pi";
import { BiError } from "react-icons/bi";

type alertprops = VariantProps<typeof alertStyles> & {
  type?: String;
  message: String;
  duration?: number;
  loading?:boolean;
};

export const Alert: React.FC<alertprops> = ({
  variant,
  type,
  message,
  duration,
  loading
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(!visible);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={cn(alertStyles({ variant, type }))}>
      <span className="text-xl font-bold">
        {type === "success" ? (
          <IoCheckmarkDoneCircle />
        ) : type === "warning" ? (
          <PiSealWarning />
        ) : type === "error" ? (
          <BiError />
        ) : (
          <IoInformationCircleOutline />
        )}
      </span>
      <p>{message}</p>
    </div>
  );
};

Alert.displayName = "Alert";
