import React, { FC } from "react";
import { HeadingTypes } from "../types/types";

const Heading2TextGradient: FC<HeadingTypes> = ({ children }) => {
  return (
    <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-mygradientpurple via-mygradientorange to-mygradientorange">
      {children}
    </h2>
  );
};

export default Heading2TextGradient;
