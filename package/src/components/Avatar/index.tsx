import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { avatarStyles } from "./AvatarColorSchemes";
import { IoPersonSharp } from "react-icons/io5";

type badgeProps = ComponentProps<"div"> & VariantProps<typeof avatarStyles>;

export const Avatar = forwardRef<HTMLDivElement, badgeProps>(
  (
    { variant, color, size, className, radius, children, ...props },
    forwardedRef
  ) => (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(
        avatarStyles({ variant, size, color, className, radius, ...props })
      )}
    >
      {children ? children : <IoPersonSharp />}
    </div>
  )
);
