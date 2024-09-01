import { cva } from "class-variance-authority";
const sizes = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" };
const sizeClasses = {
  "1": {
    horizontal: "w-8",
    vertical: "h-8",
  },
  "2": {
    horizontal: "w-12",
    vertical: "h-12",
  },
  "3": {
    horizontal: "w-16",
    vertical: "h-16",
  },
  "4": {
    horizontal: "w-24",
    vertical: "h-24",
  },
  "5": {
    horizontal: "w-96",
    vertical: "h-96",
  },
};

type Sizes = keyof typeof sizeClasses;

const separatorStyles = cva("", {
  variants: {
    variant: {
      horizontal: "h-[1px]",
      vertical: "w-[1px]",
    },
    size: Object.keys(sizes).reduce(
      (acc, key) => ({
        ...acc,
        [key]: sizeClasses[key as Sizes],
      }),
      {} as Record<Sizes, { horizontal: string; vertical: string }>
    ),
    color: {
      blue: "bg-blue-600",
      red: "bg-red-600",
      green: "bg-green-600",
      yellow: "bg-yellow-600",
      cyan: "bg-cyan-600",
      gray: "bg-gray-600",
      emerald: "bg-emerald-600",
      rose: "bg-rose-600",
      amber: "bg-amber-600",
      orange: "bg-orange-600",
      pink: "bg-pink-600",
      purple: "bg-purple-600",
      indigo: "bg-indigo-600",
      teal: "bg-teal-600",
      lime: "bg-lime-600",
      sky: "bg-sky-600",
      black: "bg-black",
      dark: "bg-slate-800",
      light: "bg-white",
    },
  },
  compoundVariants: (Object.keys(sizes) as Sizes[]).flatMap((s) => [
    {
      variant: "horizontal",
      size: s,
      className: sizeClasses[s].horizontal,
    },
    {
      variant: "vertical",
      size: s,
      className: sizeClasses[s].vertical,
    },
  ]),
  defaultVariants: {
    variant: "horizontal",
    size: "1",
    color: "blue",
  },
});

export { separatorStyles };
