import React from "react";

interface ContentProps {
  children?: React.ReactNode;
}

export const Title: React.FC<ContentProps> = ({ children }) => {
  return <h1 className='text'>{children}</h1>;
};
