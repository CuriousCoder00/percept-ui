import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { alertStyles } from "./AlertSchemes";
// import React from "react";
import { useState, useEffect } from "react";

type alertprops = VariantProps<typeof alertStyles> & {
  title?: String;
  message: String;
  icon?: React.ReactNode;
  duration?: number;
  onClose?: () => void;
};

export const Alert: React.FC<alertprops> = ({
  variant,
  color,
  title,
  position,
  message,
  icon,
  duration,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(!visible);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        alertStyles({ variant, color, position, withIcon: !!icon })
      )}
    >
      <>
        {title && <div className="font-semibold mb-2 w-full">{title}</div>}
        <div className="flex items-center gap-2px w-full">
          {icon && <span className="pr-2 ">{icon}</span>}
          <p>{message}</p>
        </div>
      </>
    </div>
  );
};

Alert.displayName = "Alert";