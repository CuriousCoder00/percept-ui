import { cva } from "class-variance-authority";

const positions = {
  topCenter: "top-2 left-1/2 transform -translate-x-1/2",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
};

// Removing the size variants to make dialog more responsive and make the size default

// const sizeVariants = {
//   xs: "w-1/4 min-w-[25%] max-w-[25%]",
//   sm: "w-1/3 min-w-[33.333333%] max-w-[33.333333%]",
//   md: "w-2/5 min-w-[40%] max-w-[40%]",
//   lg: "w-3/5 min-w-[60%] max-w-[60%]",
//   xl: "w-3/4 min-w-[75%] max-w-[75%]",
// };

const alertDialogStyles = cva(
  [
    "absolute font-sans bg-white text-base rounded-md border-2 p-3 shadow-lg z-[9999]",
    // for each breakpoint defined width of alert dialoge for better reponsiveness
    "w-3/4 md:w-1/2 lg:w-1/3",
  ],
  {
    variants: {
      position: {
        topCenter: positions.topCenter,
        center: positions.center,
      },
      // Removing the size variants to make dialog more responsive and make the size default

      // size: {
      //   xs: sizeVariants.xs,
      //   sm: sizeVariants.sm,
      //   md: sizeVariants.md,
      //   lg: sizeVariants.lg,
      //   xl: sizeVariants.xl,
      // },
    },

    defaultVariants: {
      position: "center",
      // size: "lg",
    },
  }
);

export { alertDialogStyles };
