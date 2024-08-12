import { cn } from "../../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const colorSchemes = {
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
  cyan: "cyan",
  gray: "gray",
};

type ColorScheme = keyof typeof colorSchemes;

const inputStyles = cva(
  [
    "w-full",
    "font-semibold",
    "focus:outline-none",
    "px-2 py-1",
    "text-slate-700 focus:border-blue-500 ",
    "bg-transparent"
  ],
  {
    variants: {
      variant: {
        classic: "transition-colors duration-300 border rounded-md",
        standard: "transition-colors duration-300 border-b",
        ghost:"border-0 transition-colors duration-300"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      },
    },
    compoundVariants: [
      {
        variant: "classic",
        className: `focus:shadow-sm focus:shadow-blue-400`,
      },
      {
        variant: "standard",
        className: ``,
      },
      {
        variant: "ghost",
        className: ``,
      }
    ],
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, radius, ...props }, forwardedRef) => (
    <input
      {...props}
      ref={forwardedRef}
      className={cn(inputStyles({ variant, className, radius, ...props }))}
    />
  )
);
