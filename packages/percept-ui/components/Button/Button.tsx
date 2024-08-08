import type { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode;
  styles: ReactNode;
  variant: ReactNode;
}

export const Button = ({ label, styles, variant }: ButtonProps): ReactNode => {
  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles =
        "px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded";
      break;
    case "danger":
      variantStyles =
        "px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded";
      break;
    case "success":
      variantStyles =
        "px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded";
      break;
    case "dark":
      variantStyles =
        "px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded";
      break;
    case "warning":
      variantStyles =
        "px-3 py-1 bg-yellow-600 hover:bg-yellow-500 text-white rounded";
      break;
    case "info":
      variantStyles =
        "px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded";
      break;
    case "light":
      variantStyles =
        "px-3 py-1 border border-slate-400 hover:bg-slate-100 rounded";
      break;
    default:
      break;
  }
  return (
    <button
      className={`${styles ? `${styles}` && variantStyles : variantStyles} transition-colors duration-300 ease-in-out`}
      type="button"
    >
      {label}
    </button>
  );
};
