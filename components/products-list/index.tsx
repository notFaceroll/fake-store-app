import React from "react";

interface ListProps {
  children?: React.ReactNode;
}

export const ProductsList: React.FC<ListProps> = ({ children }) => {
  return <ul className="list">{children}</ul>;
};
