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
};

const pulseLoaderStyles = cva(
  [
    "w-5 h-5 flex justify-center items-center",
    "rounded-full",
    "cursor-not-allowed animate-ping relative",
  ],
  {
    variants: {
      size: {
        1: "w-4 h-4",
        2: "w-6 h-6",
        3: "w-8 h-8",
        4: "w-10 h-10",
        5: "w-12 h-12",
      },
      color: colorClasses,
    },
    compoundVariants: (Object.keys(colors) as Colors[]).flatMap((scheme) => [
      {
        color: scheme,
        className: colorClasses[scheme],
      },
    ]),
    defaultVariants: {
      size: 3,
      color: "blue",
    },
  }
);

export { pulseLoaderStyles };
