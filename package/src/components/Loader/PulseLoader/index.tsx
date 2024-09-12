import { cn } from "../../../utils";
import { VariantProps } from "class-variance-authority";
import { pulseLoaderStyles } from "./PulseColorSchemes";

type pulseLoaderProps = VariantProps<typeof pulseLoaderStyles>;

export const PulseLoader: React.FC<pulseLoaderProps> = ({ color, size }) => (
  <div className={cn(pulseLoaderStyles({ size, color }))} />
);


PulseLoader.displayName = "PulseLoader";