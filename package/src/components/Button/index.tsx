import { cn } from "../../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const colorSchemes = {
  primary: "primary",
  danger: "danger",
  dark: "dark",
  success: "success",
  warning: "warning",
  info: "info",
  light: "gray",
};

type ColorScheme = keyof typeof colorSchemes;

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "transition-colors duration-300",
        outline: "transition-colors duration-300 border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-2xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      colorscheme: Object.keys(colorSchemes).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key === "light" ? `text-${colorSchemes[key]}` : "text-white",
        }),
        {} as Record<ColorScheme, string>
      ),
    },
    compoundVariants: (Object.keys(colorSchemes) as ColorScheme[]).flatMap(
      (scheme) => [
        {
          variant: "solid",
          colorscheme: scheme,
          className: `bg-${colorSchemes[scheme]}-500 hover:bg-${colorSchemes[scheme]}-600`,
        },
        {
          variant: "outline",
          colorscheme: scheme,
          className: `text-${colorSchemes[scheme]}-600 border-${colorSchemes[scheme]}-500 bg-transparent hover:bg-${colorSchemes[scheme]}-100`,
        },
        {
          variant: "ghost",
          colorscheme: scheme,
          className: `text-${colorSchemes[scheme]}-600 bg-transparent hover:bg-${colorSchemes[scheme]}-100`,
        },
      ]
    ),
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, radius, colorscheme, className, ...props },
    forwardedRef
  ) => (
    <button
      {...props}
      ref={forwardedRef}
      className={cn(
        buttonStyles({ variant, size, radius, colorscheme, className })
      )}
    />
  )
);
