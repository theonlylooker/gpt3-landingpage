import React, { FC } from "react";
import { ParagraphTypes } from "../types/types";

const Paragraph: FC<ParagraphTypes> = ({ children }) => {
  return <p className="text-mytextvariation">{children}</p>;
};

export default Paragraph;
