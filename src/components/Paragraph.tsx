import React, { FC } from "react";
import { TextTypes } from "../types/types";

const Paragraph: FC<TextTypes> = ({ children, size, maxWidth, text }) => {
  return (
    <p className={`text-mytextvariation ${size} ${maxWidth}`}>
      {text ? text : children}
    </p>
  );
};

export default Paragraph;
