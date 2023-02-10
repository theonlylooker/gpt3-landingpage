import React, { FC } from "react";
import { TextTypes } from "../types/types";

const Heading1TextGradient: FC<TextTypes> = ({
  children,
  size,
  text,
  maxWidth,
}) => {
  return (
    <h1
      className={`${size} ${maxWidth} text-transparent bg-clip-text bg-gradient-to-r from-mygradientpurple via-mygradientorange to-mygradientorange `}
    >
      {text ? text : children}
    </h1>
  );
};

export default Heading1TextGradient;
