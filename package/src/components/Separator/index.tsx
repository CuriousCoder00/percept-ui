import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

import { separatorStyles } from "./separatorColorSchemes";

type ButtonProps = ComponentProps<"div"> & VariantProps<typeof separatorStyles>;

export const Separator = forwardRef<HTMLDivElement, ButtonProps>(
  ({ variant, size, color, className, ...props }, forwardedRef) => (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(separatorStyles({ variant, size, color }), className)}
    />
  )
);

Separator.displayName = "Separator";