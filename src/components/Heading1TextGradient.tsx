import React, { FC } from "react";
import { TextTypes } from "../types/types";

const Heading1TextGradient: FC<TextTypes> = ({ children, size, text }) => {
  return (
    <h1
      className={`${size} text-transparent bg-clip-text bg-gradient-to-r from-mygradientpurple to-mygradientorange `}
    >
      {text ? text : children}
    </h1>
  );
};

export default Heading1TextGradient;
