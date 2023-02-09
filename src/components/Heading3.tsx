import React, { FC } from "react";
import { TextTypes } from "../types/types";

const Heading3: FC<TextTypes> = ({ children, size, text }) => {
  return <h3 className={`font-bold ${size}`}>{text ? text : children}</h3>;
};

export default Heading3;
