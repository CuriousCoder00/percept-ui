import {cn} from "../../utils"; 
import { VariantProps } from "class-variance-authority"; 
import { alertStyles } from "./AlertSchemes"; 
import React from "react";

type alertprops=VariantProps<typeof alertStyles>&{
    title?:String; 
    message:String;
    icon?:React.ReactNode; 
}; 

export const Alert: React.FC<alertprops>=({
    variant,
    color,
    title,
    message,
    icon,
}) => (
   <div className={cn(alertStyles({variant,color,withIcon: !!icon}))} >
      {icon && <div className="absolute left-4">{icon}</div>}
    <div>
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div>{message}</div>
   </div>  
   </div>
);