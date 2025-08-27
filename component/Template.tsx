import React from "react";
import { ReactChildren } from "@/types";
import Header from "./Header";
import Footer from "./Footer";

const Template = ({ children }: ReactChildren) => {
  return (
    <div className="grid grid-rows-[auto 1fr auto]">
      <Header />
      <div className=""></div>
      {children}
      <Footer />
    </div>
  );
};

export default Template;
