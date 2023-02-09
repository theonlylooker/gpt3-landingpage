import React, { FC } from "react";
import { TextTypes } from "../types/types";

const Heading2TextGradient: FC<TextTypes> = ({
  children,
  size,
  text,
  maxWidth,
}) => {
  return (
    <h2
      className={` ${maxWidth} font-bold bg-clip-text text-transparent bg-gradient-to-r from-mygradientpurple via-mygradientorange to-mygradientorange ${size}`}
    >
      {text ? text : children}
    </h2>
  );
};

export default Heading2TextGradient;
