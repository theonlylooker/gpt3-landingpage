import React, { FC } from "react";
import { HeadingTypes } from "../types/types";

const Heading3: FC<HeadingTypes> = ({ children }) => {
  return <h3 className="font-bold ">{children}</h3>;
};

export default Heading3;
