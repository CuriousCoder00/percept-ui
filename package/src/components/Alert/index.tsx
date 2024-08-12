import React, { forwardRef } from 'react';
import { cn } from '../../utils';
import { cva, VariantProps } from 'class-variance-authority';

const colors = {
  blue: 'blue',
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  cyan: 'cyan',
  gray: 'gray',
  orange: 'orange',
};

type Colors = keyof typeof colors;

const alertStyles = cva(
  [
    'w-full',
    'p-4',
    'rounded-md',
    'font-semibold',
    'flex',
    'items-center',
    'gap-2',
    'focus:outline-none',
  ],
  {
    variants: {
      variant: {
        solid: 'transition-colors duration-300 text-white',
        outline: 'transition-colors duration-300 border-2 bg-transparent',
        ghost: 'transition-colors duration-300 bg-transparent',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      color: Object.keys(colors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: '',
        }),
        {} as Record<Colors, string>
      ),
    },
    compoundVariants: (Object.keys(colors) as Colors[]).flatMap(
      (scheme) => [
        {
          variant: 'solid',
          color: scheme,
          className: `bg-${colors[scheme]}-600`,
        },
        {
          variant: 'outline',
          color: scheme,
          className: `text-${colors[scheme]}-600 border-${colors[scheme]}-600`,
        },
        {
          variant: 'ghost',
          color: scheme,
          className: `text-${colors[scheme]}-600`,
        },
      ]
    ),
  }
);

// Define the prop types for the Alert component
type AlertProps = VariantProps<typeof alertStyles> & {
  children: React.ReactNode;
};

// Create the Alert component using forwardRef
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, size, color, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(alertStyles({ variant, size, color }))}
    >
      {children}
    </div>
  )
);

Alert.displayName = 'Alert';
