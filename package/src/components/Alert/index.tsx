import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { alertStyles } from "./AlertSchemes";
// import React from "react";

type alertprops = VariantProps<typeof alertStyles> & {
  title?: String;
  message: String;
  icon?: React.ReactNode;
};

export const Alert: React.FC<alertprops> = ({
  variant,
  color,
  title, 
  position,
  message,
  icon,
}) => (
  <div className={cn(alertStyles({ variant, color,position, withIcon: !!icon }))}>
    <>
      {title && <div className="font-semibold mb-2">{title}</div>} 
      <div className="flex gap-2px"> 
      {icon && <span className="pr-2">{icon}</span>}<p>{message}</p>
        </div>    
    </>
  </div>
);
