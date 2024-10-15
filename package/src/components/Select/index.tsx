

import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { selectStyles } from "./SelectSchemes";

type SelectProps = VariantProps<typeof selectStyles> & {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  variant,
  size,
  colorScheme,
  onChange,
}) => (
  <select
    className={cn(selectStyles({ variant, size, colorScheme }))}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "primary",
};

Select.displayName = "Select";
