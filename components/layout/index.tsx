import React from "react";
import { Footer } from "./footer";
import { NavBar } from "./navigation";
import { Header } from "./header";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
