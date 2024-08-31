import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { avatarStyles } from "./AvatarColorSchemes";

type avatarProps = VariantProps<typeof avatarStyles> & {
  fallback?: String;
  src?: String;
};

export const Avatar: React.FC<avatarProps> = ({
  variant,
  color,
  size,
  radius,
  fallback,
  src,
}) => (
  <div className={cn(avatarStyles({ variant, color, size, radius }))}>
    {src ? (
      <img
        className={cn(avatarStyles({ variant, color, size, radius }))}
        src={`${src}`}
        alt={`${fallback}`}
      />
    ) : (
      fallback
    )}
  </div>
);
