import type { ReactNode } from "react";

interface HeaderProps {
  BrandName: ReactNode;
  variant: ReactNode;
  NavLinks: ReactNode;
}
import { Button } from "../Button/Button";
import { DropDown } from "percept-ui";

export const Header = ({ BrandName, variant, NavLinks }: HeaderProps): ReactNode => {
  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles =
        "p-4 flex w-full justify-between items-center text-white bg-blue-500";
      break;

    case "dark":
      variantStyles = "p-4 flex w-full justify-between items-center text-white bg-slate-700";
      break;
    case "light":
      variantStyles = "p-4 flex w-full justify-between items-center bg-slate-200";
      break;

    default:
      break;
  }
  return (
    <header className={`${variantStyles}`}>
      <div className="flex">
        <a className="text-2xl font-bold" href="/">
          {BrandName}
        </a>
      </div>
      <nav className="md:flex hidden justify-center items-center">
        <ul className="flex h-full w-full justify-center flex-row items-center gap-4 list-none">
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              About
            </a>
          </li>
          <li>
            <a href="#">
              Services
            </a>
          </li>
          <li>
            <a href="#">
              Contact
            </a>
          </li>
          <li>
            <DropDown variant={variant}/>
          </li>
        </ul>
      </nav>
      <Button styles="" label="Login" variant={variant} />
    </header>
  );
};
