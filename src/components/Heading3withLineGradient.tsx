import React, { FC } from "react";
import { HeadingTypes } from "../types/types";
import Heading3 from "./Heading3";

const Heading3withLineGradient: FC<HeadingTypes> = ({ children }) => {
  return (
    <div>
      <div className="h-1 w-9 bg-gradient-to-r from-mygradientpurple to-mygradientorange relative -top-2"></div>
      <Heading3>{children}</Heading3>
    </div>
  );
};

export default Heading3withLineGradient;
