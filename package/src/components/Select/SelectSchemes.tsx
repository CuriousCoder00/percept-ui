import { cva } from "class-variance-authority";

const selectStyles = cva(
  [
    "block",
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "border",
    "transition-colors",
    "duration-300",
  ],
  {
    variants: {
      variant: {
        solid: "bg-gray-200 border-gray-300",
        outline: "border-gray-500",
        ghost: "bg-transparent",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-4 py-2 text-lg",
        xl: "px-4 py-2 text-2xl",
      },
      colorScheme: {
        primary: "bg-blue-500 text-white border-blue-600",
        secondary: "bg-gray-500 text-white border-gray-600",
        success: "bg-green-500 text-white border-green-600",
        danger: "bg-red-500 text-white border-red-600",
        warning: "bg-yellow-500 text-black border-yellow-600",
        info: "bg-cyan-500 text-white border-cyan-600",
        light: "bg-gray-200 text-gray-800 border-gray-300",
        dark: "bg-gray-800 text-white border-gray-900",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

export { selectStyles };
