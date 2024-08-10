import React from "react";
// import { Button, DropDown, Header } from "../src/main"
import { DropDown } from "@/Dropdown";
function App() {
  return (
    <>
      
      <div className="flex gap-5">
        <DropDown variant="dark" />
        <DropDown variant="primary" />
        <DropDown variant="light" />
        <DropDown variant="dark" />
        <DropDown variant="primary" />
        <DropDown variant="light" />
      </div>
    </>
  );
}

export default App;
