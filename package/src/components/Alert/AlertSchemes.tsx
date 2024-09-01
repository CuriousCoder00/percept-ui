import { cva } from "class-variance-authority"; 

const colors ={
    success:"green",
    error: "red",
    warning: "yellow",
    info: "blue",
};

type Colors = keyof typeof colors; 

const colorClasses ={
    success:{
        solid:"bg-green-100 text-green-700 border-green-400", 
        outline: "text-green-700 border-green-400",
    },error: {
        solid: "bg-red-100 text-red-700 border-red-400",
        outline: "text-red-700 border-red-400",
      },
      warning: {
        solid: "bg-yellow-100 text-yellow-700 border-yellow-400",
        outline: "text-yellow-700 border-yellow-400",
      },
      info: {
        solid: "bg-blue-100 text-blue-700 border-blue-400",
        outline: "text-blue-700 border-blue-400",
      },  
}; 

const alertStyles = cva(
    [
      "p-4",
      "rounded-md",
      "border",
      "flex",
      "items-start",
    ],
    {
      variants: {
        variant: {
          solid: "border-transparent",
          outline: "bg-transparent",
        },
        withIcon: {
          true: "pl-12", // Extra padding when icon is present
          false: "pl-4",
        }, 
         color: {
        success: "text-green-700",
        error: "text-red-700",
        warning: "text-yellow-700",
        info: "text-blue-700",
      },
      },
      compoundVariants: (Object.keys(colors) as Colors[]).flatMap((color) => [
        {
          variant: "solid",
          color,
          className: colorClasses[color].solid,
        },
        {
          variant: "outline",
          color,
          className: colorClasses[color].outline,
        },
      ]),
      defaultVariants: {
        variant: "solid",
        color: "info",
        withIcon: false,
      },
    }
  ); 

  export {alertStyles}