import React, { FC } from "react";
import Heading3 from "./Heading3";

interface CardType {
  date: string;
  title: string;
  img: string;
  minh?: boolean;
}

const Card: FC<CardType> = ({ date, title, img, minh }) => {
  return (
    <div
      className={`bg-mybluebackground ${minh ? "row-start-1" : ""} ${
        minh ? "row-end-3" : ""
      }`}
    >
      <figure className={`min-w-full relative -top-7`}>
        <img
          className={`min-w-full object-cover ${minh ? "h-96" : ""}`}
          src={img}
          alt="a passage of numbers"
        />
      </figure>
      <div
        className={`p-6 flex flex-col justify-between gap-y-10 ${
          minh ? "h-[61%]" : ""
        }`}
      >
        <div>
          <small className="text-xs ">{date}</small>
          <Heading3 size="text-2xl" maxWidth="max-w-[20px]">
            {title}
          </Heading3>
        </div>
        <div>
          <small className="text-xs">Read Full Article</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
