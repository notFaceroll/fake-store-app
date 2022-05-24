import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import classes from './layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
