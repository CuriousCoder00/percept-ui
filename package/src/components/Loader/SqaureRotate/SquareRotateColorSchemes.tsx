import { cva } from "class-variance-authority";

const colors = {
  black: "black",
  dark: "slate",
  light: "white",
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
  cyan: "cyan",
  gray: "gray",
  emerald: "emerald",
  rose: "rose",
  amber: "amber",
  orange: "orange",
  pink: "pink",
  purple: "purple",
  indigo: "indigo",
  teal: "teal",
  lime: "lime",
  sky: "sky",
};

type Colors = keyof typeof colors;

const colorClasses = {
  blue: "text-blue-600",
  red: "text-red-600",
  green: "text-green-600",
  yellow: "text-yellow-600",
  cyan: "text-cyan-600",
  gray: "text-gray-600",
  emerald: "text-emerald-600",
  rose: "text-rose-600",
  amber: "text-amber-600",
  orange: "text-orange-600",
  pink: "text-pink-600",
  purple: "text-purple-600",
  indigo: "text-indigo-600",
  teal: "text-teal-600",
  lime: "text-lime-600",
  sky: "text-sky-600",
  black: "text-black",
  dark: "text-slate-800",
  light: "text-white",
};

const squareRotateLoaderStyles = cva(
  ["w-16 h-16", "cursor-not-allowed", "scale-[0.45]", "sqaureRotateLoader"],
  {
    variants: {
      color: colorClasses,
      size: {
        1: "scale-[0.30]",
        2: "scale-[0.40]",
        3: "scale-50",
        4: "scale-[0.60]",
        5: "scale-[0.70]",
      },
    },
    compoundVariants: (Object.keys(colors) as Colors[]).flatMap((scheme) => [
      {
        color: scheme,
        className: colorClasses[scheme],
      },
    ]),
    defaultVariants: {
      color: "blue",
    },
  }
);

export { squareRotateLoaderStyles };
