import React from "react";

interface ContentProps {
  children?: React.ReactNode;
}

export const MainContent = ({ children }: ContentProps) => {
  return <main className="content">{children}</main>;
};
