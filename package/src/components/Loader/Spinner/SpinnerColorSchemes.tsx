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
  blue: {
    solid: "border-b-blue-600 border-l-blue-600",
    dashed:
      "border-b-blue-500 border-l-blue-400 border-t-blue-300 border-r-blue-200",
  },
  red: {
    solid: "border-b-red-600 border-l-red-600",
    dashed:
      "border-b-red-500 border-l-red-400 border-t-red-300 border-r-red-200",
  },
  green: {
    solid: "border-b-green-600 border-l-green-600",
    dashed:
      "border-b-green-500 border-l-green-400 border-t-green-300 border-r-green-200",
  },
  yellow: {
    solid: "border-b-yellow-600 border-l-yellow-600",
    dashed:
      "border-b-yellow-500 border-l-yellow-400 border-t-yellow-300 border-r-yellow-200",
  },
  cyan: {
    solid: "border-b-cyan-600 border-l-cyan-600",
    dashed:
      "border-b-cyan-500 border-l-cyan-400 border-t-cyan-300 border-r-cyan-200",
  },
  gray: {
    solid: "border-b-gray-600 border-l-gray-600",
    dashed:
      "border-b-gray-500 border-l-gray-400 border-t-gray-300 border-r-gray-200",
  },
  emerald: {
    solid: "border-b-emerald-600 border-l-emerald-600",
    dashed:
      "border-b-emerald-500 border-l-emerald-400 border-t-emerald-300 border-r-emerald-200",
  },
  rose: {
    solid: "border-b-rose-600 border-l-rose-600",
    dashed:
      "border-b-rose-500 border-l-rose-400 border-t-rose-300 border-r-rose-200",
  },
  amber: {
    solid: "border-b-amber-600 border-l-amber-600",
    dashed:
      "border-b-amber-500 border-l-amber-400 border-t-amber-300 border-r-amber-200",
  },
  orange: {
    solid: "border-b-orange-600 border-l-amber-600",
    dashed:
      "border-b-orange-500 border-l-orange-400 border-t-orange-300 border-r-orange-200",
  },
  pink: {
    solid: "border-b-pink-600 border-l-pink-600",
    dashed:
      "border-b-pink-500 border-l-pink-400 border-t-pink-300 border-r-pink-200",
  },
  purple: {
    solid: "border-b-purple-600 border-l-purple-600",
    dashed:
      "border-b-purple-500 border-l-purple-400 border-t-purple-300 border-r-purple-200",
  },
  indigo: {
    solid: "border-b-indigo-600 border-l-indigo-600",
    dashed:
      "border-b-indigo-500 border-l-indigo-400 border-t-indigo-300 border-r-indigo-200",
  },
  teal: {
    solid: "border-b-teal-600 border-l-teal-600",
    dashed:
      "border-b-teal-500 border-l-teal-400 border-t-teal-300 border-r-teal-200",
  },
  lime: {
    solid: "border-b-lime-600 border-l-lime-600",
    dashed:
      "border-b-lime-500 border-l-lime-400 border-t-lime-300 border-r-lime-200",
  },
  sky: {
    solid: "border-b-sky-600 border-l-sky-600",
    dashed:
      "border-b-sky-500 border-l-sky-400 border-t-sky-300 border-r-sky-200",
  },
  black: {
    solid: "border-b-black border-l-black",
    dashed:
      "border-b-black border-l-slate-800 border-t-slate-600 border-r-slate-400",
  },
  dark: {
    solid: "border-b-slate-800 border-l-slate-800",
    dashed:
      "border-b-slate-600 border-l-slate-500 border-t-slate-400 border-r-slate-300",
  },
  light: {
    solid: "border-b-white border-l-white",
    dashed:
      "border-b-white border-l-slate-100 border-t-slate-200 border-r-slate-300",
  },
};

const spinnerStyles = cva(
  [
    "w-5 h-5 flex justify-center items-center",
    "rounded-full",
    "cursor-not-allowed",
    "animate-spin",
  ],
  {
    variants: {
      variant: {
        solid: "border-b-4 border-l-4",
        dashed: `border-dashed border-[5px]`,
      },
      size: {
        1: "w-7 h-7",
        2: "w-9 h-9",
        3: "w-11 h-11",
        4: "w-14 h-14",
        5: "w-16 h-16",
      },

      color: Object.keys(colors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: "text-white",
        }),
        {} as Record<Colors, string>
      ),
    },
    compoundVariants: (Object.keys(colors) as Colors[]).flatMap((scheme) => [
      {
        variant: "solid",
        color: scheme,
        className: colorClasses[scheme].solid,
      },
      {
        variant: "dashed",
        color: scheme,
        className: colorClasses[scheme].dashed,
      },
    ]),
    defaultVariants: {
      variant: "solid",
      size: 3,
      color: "blue",
    },
  }
);

export { spinnerStyles };
