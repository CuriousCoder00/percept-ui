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
  ["w-full", "rounded-md", "font-semibold", "focus:outline-none"],
  {
    variants: {
      variant: {
        solid: "transition-colors duration-300 border-2",
        ghost: "transition-colors duration-300",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
      },
      colorscheme: Object.keys(colorSchemes).reduce(
        (acc, key) => ({
          ...acc,
          [key]: `text-${colorSchemes[key as ColorScheme]}`,
        }),
        {} as Record<ColorScheme, string>
      ),
    },
    compoundVariants: (Object.keys(colorSchemes) as ColorScheme[]).flatMap(
      (scheme) => [
        {
          variant: "solid",
          colorscheme: scheme,
          className: `border-2 border-${scheme}-500 hover:bg-${scheme}-600`,
        },
        {
          variant: "ghost",
          colorscheme: scheme,
          className: `text-${colorSchemes[scheme]}-600 bg-transparent hover:bg-${colorSchemes[scheme]}-100`,
        },
      ]
    ),
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, forwardedRef) => (
    <input
      {...props}
      ref={forwardedRef}
      className={cn('border-2',inputStyles({ className }))}
    />
  )
);
