import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { MainContent } from "./main";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
