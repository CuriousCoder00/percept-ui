import { cn } from "../../../utils";
import { VariantProps } from "class-variance-authority";
import { spinnerStyles } from "./SpinnerColorSchemes";

type spinnerProps = VariantProps<typeof spinnerStyles>;

export const Spinner: React.FC<spinnerProps> = ({ color, size, variant }) => (
  <div className={cn(spinnerStyles({ size, color, variant }))} />
);


Spinner.displayName = "Spinner";