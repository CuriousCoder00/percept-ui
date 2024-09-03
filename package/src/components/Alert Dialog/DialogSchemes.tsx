import {cva} from "class-variance-authority"; 

const positions={ 
    
    topCenter: "top-2 left-1/2 transform -translate-x-1/2",   
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", 
    bottomCenter: "bottom-2 left-1/2 transform -translate-x-1/2",
}; 

const alertDialogStyles = cva(
    ["p-3 rounded-md border flex flex-col fixed items-start z-[9999999]"],
    {
      variants: {
        position: {
          topCenter: positions.topCenter,
          center: positions.center,
          bottomCenter: positions.bottomCenter,
        },
      },
      defaultVariants: {
        position: "center",
      },
    }
  );
  export {alertDialogStyles};