import { useState, type ReactNode } from "react";

interface DropDownProps {
    variant: ReactNode,
}
export const DropDown = ({variant}: DropDownProps): ReactNode => {
  const [dropDownToggle, setDropDownToggle] = useState(false);
    
  return (
    <div className={`relative`}>
      <ul className="">
        <li className="py-2 cursor-pointer" onClick={() => setDropDownToggle(!dropDownToggle)}>
          Dropdown Menu
        </li>
        {dropDownToggle && (
          <ul className={`absolute z-[999999] border rounded py-2 flex flex-col  ${variant ==="light" ? '' :'text-slate-800'}`}>
            <li className="p-1 cursor-pointer hover:bg-blue-500 hover:text-white">First Option</li>
            <li className="p-1 cursor-pointer hover:bg-blue-500 hover:text-white">Second Option</li>
            <li className="p-1 cursor-pointer hover:bg-blue-500 hover:text-white">Third Option</li>
          </ul>
        )}
      </ul>
    </div>
  );
};
