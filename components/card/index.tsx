import React from "react";
import classes from "./card.module.scss";

interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};
