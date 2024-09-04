import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { accordionStyles } from "./AccordianSchemes";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type accordionProps = VariantProps<typeof accordionStyles> & {
  heading: string;
  body: string;
};

// TODOS: 
// Make different types accordions
// Add Animations if possible
// Add width for different breakpoints for better responsiveness
//
//
//
//
//

export const Accordion: React.FC<accordionProps> = ({
  variant,
  color,
  heading,
  body,
}) => {
  const [toggle, setToggle] = useState(false);
  const handleAccordionToggle = () => {
    setTimeout(() => {
      setToggle(!toggle);
    }, 100);
  };
  return (
    <div className={cn(accordionStyles({ variant, color }))}>
      <div className="flex w-[70vw] flex-col justify-center items-start cursor-pointer">
        <div
          className={`flex justify-between items-center border-b ${toggle && "border-b-blue-800"} w-full`}
          onClick={handleAccordionToggle}
        >
          {heading}
          <IoIosArrowDown
            className={`${toggle && "rotate-180"} transition-all duration-200 `}
          />
        </div>
        <div className={`${toggle ? "" : "hidden"} transition-all duration-150 mt-2`}>
          {body}
        </div>
      </div>
    </div>
  );
};
