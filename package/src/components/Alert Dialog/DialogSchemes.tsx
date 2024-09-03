import { cva } from "class-variance-authority";

const positions = {
  topCenter: "top-2 left-1/2 transform -translate-x-1/2",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  bottomCenter: "bottom-2 left-1/2 transform -translate-x-1/2",
};
const sizeVariants = {
  xs: "w-1/4 min-w-[25%] max-w-[25%]",
  sm: "w-1/3 min-w-[33.333333%] max-w-[33.333333%]",
  md: "w-2/5 min-w-[40%] max-w-[40%]",
  lg: "w-3/5 min-w-[60%] max-w-[60%]",
  xl: "w-3/4 min-w-[75%] max-w-[75%]",
  xxl: "w-screen min-w-[100vw] max-w-[100vw]",
};

const alertDialogStyles = cva(
  [
    "relative",
    "rounded-lg",
    "bg-white",
    "font-sans",
    "text-base",
    "font-light",
    "leading-relaxed",
    "text-blue-gray-500",
    "antialiased",
    "shadow-2xl",
    "m-4",
    " z-[9999999]",
  ],
  {
    variants: {
      position: {
        topCenter: positions.topCenter,
        center: positions.center,
        bottomCenter: positions.bottomCenter,
      },
      size: {
        xs: sizeVariants.xs,
        sm: sizeVariants.sm,
        md: sizeVariants.md,
        lg: sizeVariants.lg,
        xl: sizeVariants.xl,
        xxl: sizeVariants.xxl,
      },
    },

    defaultVariants: {
      position: "center",
      size: "sm",
    },
  }
); 

const backdropStyles = cva(
    [
      "pointer-events-none",
      "fixed",
      "inset-0",
      "z-[999]",
      "grid",
      "h-screen",
      "w-screen",
      "place-items-center",
      "bg-black",
      "bg-opacity-60",
      "opacity-0",
      "backdrop-blur-sm",
      "transition-opacity",
      "duration-300",
    ]
  );
export { alertDialogStyles,backdropStyles };
