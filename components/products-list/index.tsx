import React from "react";

interface ListProps {
  children?: React.ReactNode;
}

export const ProductsList = ({ children }: ListProps) => {
  return <ul className="list">{children}</ul>;
};
