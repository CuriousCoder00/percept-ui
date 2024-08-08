import React from "react";
import { Button, DropDown, Header } from "../components/main";

function App() {
  return (
    <>
      <Header variant="light" BrandName="Percept UI" />
      <Header variant="primary" BrandName="Percept UI" />
      <Header variant="dark" BrandName="Percept UI" />
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
