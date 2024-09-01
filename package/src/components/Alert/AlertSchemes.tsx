import { cva } from "class-variance-authority";

const colors = {
  success: "green",
  error: "red",
  warning: "yellow",
  info: "blue",
};

type Colors = keyof typeof colors;

const colorClasses = {
  success: {
    solid: "bg-green-200 text-green-700 border-green-400",
    outline: "text-green-700 border-green-400",
  },
  error: {
    solid: "bg-red-200 text-red-700 border-red-400",
    outline: "text-red-700 border-red-400",
  },
  warning: {
    solid: "bg-yellow-200 text-yellow-700 border-yellow-400",
    outline: "text-yellow-700 border-yellow-400",
  },
  info: {
    solid: "bg-blue-200 text-blue-700 border-blue-400",
    outline: "text-blue-700 border-blue-400",
  },
};
const position = {
  topLeft: "top-2 left-2",
  topCenter: "top-2 left-1/2 transform -translate-x-1/2",
  topRight: "top-2 right-2",
  centerLeft: "top-1/2 left-2 transform -translate-y-1/2",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  centerRight: "top-1/2 right-2 transform -translate-y-1/2",
  bottomLeft: "bottom-2 left-2",
  bottomCenter: "bottom-2 left-1/2 transform -translate-x-1/2",
  bottomRight: "bottom-2 right-2",
};

const alertStyles = cva(
  ["p-2", "rounded-md", "border", "flex","flex-col", "items-start"],
  {
    variants: {
      variant: {
        solid: "border-transparent",
        outline: "bg-transparent",
      },
      withIcon: {
        true:"", 
        false:""
      },
      color: {
        success: "text-green-700",
        error: "text-red-700",
        warning: "text-yellow-700",
        info: "text-blue-700",
      },  
      position:{
        topLeft: position.topLeft,
        topCenter: position.topCenter,
        topRight: position.topRight,
        centerLeft: position.centerLeft,
        center: position.center,
        centerRight: position.centerRight,
        bottomLeft: position.bottomLeft,
        bottomCenter: position.bottomCenter,
        bottomRight: position.bottomRight,
      }

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
      color: "success", 
      position:"bottomCenter",
      withIcon: false,
    },
  }
);

export { alertStyles };
