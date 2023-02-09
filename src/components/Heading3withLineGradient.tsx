import React, { FC } from "react";
import { TextTypes } from "../types/types";
import Heading3 from "./Heading3";

const Heading3withLineGradient: FC<TextTypes> = ({
  children,
  size,
  maxWidth,
  text,
}) => {
  return (
    <div>
      <div className="h-1 w-9 bg-gradient-to-r from-mygradientpurple to-mygradientorange relative -top-2"></div>

      <Heading3 size={size} text={text} maxWidth={maxWidth}>
        {children}
      </Heading3>
    </div>
  );
};

export default Heading3withLineGradient;
