import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { badgeStyles } from "./BadgeColorSchemes";

type badgeProps = ComponentProps<"div"> & VariantProps<typeof badgeStyles>;

export const Badge = forwardRef<HTMLDivElement, badgeProps>(
  ({ variant, color, size, className, radius, children, ...props }, forwardedRef) => (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(badgeStyles({ variant, size, color, className, radius, ...props }))}
    >
      {children}
    </div>
  )
);
