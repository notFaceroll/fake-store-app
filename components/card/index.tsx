import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <li className="card-wrapper">{children}</li>;
};
