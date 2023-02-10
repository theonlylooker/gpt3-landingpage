import React from "react";
import Card from "./Card";
import Heading1TextGradient from "./Heading1TextGradient";
import CardImage1 from "../assets/Rectangle_22.svg";
const Library = () => {
  let data = [
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      img: CardImage1,
    },
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      img: CardImage1,
    },
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      img: CardImage1,
    },
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      img: CardImage1,
    },
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      img: CardImage1,
    },
  ];
  return (
    <div className="flex flex-col gap-32">
      <Heading1TextGradient size="text-6xl">
        A lot is happening, <br /> We are blogging about it.
      </Heading1TextGradient>
      {/* <Card date={data[0].date} title={data[0].title} img={data[0].img} /> */}
      <div className="grid grid-cols-3 gap-12">
        {data.map((element, index) =>
          index === 1 ? (
            <Card
              key={index}
              date={element.date}
              title={element.title}
              img={element.img}
              minh={true}
            />
          ) : (
            <Card
              key={index}
              date={element.date}
              title={element.title}
              img={element.img}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Library;
