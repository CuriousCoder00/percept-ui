import { useState } from "react";
import { Button } from "../Button";
import { cn } from "src/utils";

export const DeleteButton = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      setIsDeleted(true);
      setTimeout(() => {
        setIsDeleted(false);
      }, 1250);
    }, 2500);
  };
  const classes =
    "flex items-center justify-center rounded-md border-0 px-3 cursor-pointer outline-none transition-all duration-300 ease-in-out delete-button";
  return (
    <Button
      variant={"solid"}
      color="red"
      onClick={handleClick}
      className={cn(classes, isDeleting || isDeleted ? "deleting" : "")}
      disabled={isDeleting || isDeleted}
    >
      <span className="block text-center min-w-16">
        {isDeleting || isDeleted ? "Deleting" : "Delete"}
      </span>
      <span className="relative overflow-hidden grid place-items-center w-16 min-w-0 h-8">
        <span className="balls absolute -top-8 left-1/2  -translate-x-1/2 w-2 h-2 rounded-[50%] bg-white"></span>
        <span className="lid absolute -translate-x-1/2 left-1/2 top-2 w-6 h-[2px] origin-top-left bg-white"></span>
        <span className="can overflow-hidden relative translate-x-0 translate-y-[2px] w-[20px] h-[22px] rounded-bl-md rounded-br-md border-2 border-white border-t-0">
          <span className="filler absolute top-full left-1/2 -ml-8 w-16 h-[120%] bg-white"></span>
        </span>
      </span>
    </Button>
  );
};
