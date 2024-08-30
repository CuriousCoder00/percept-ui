import { cn } from "../../../utils";
import { VariantProps } from "class-variance-authority";
import { squareRotateLoaderStyles } from "./SquareRotateColorSchemes";

type spinnerProps = VariantProps<typeof squareRotateLoaderStyles>;

export const SquareRotate: React.FC<spinnerProps> = ({ color, size }) => (
  <div className={cn(squareRotateLoaderStyles({ color, size }))} />
);
