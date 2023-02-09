import React from "react";
import Heading2TextGradient from "./Heading2TextGradient";
import Heading3withLineGradient from "./Heading3withLineGradient";
import Paragraph from "./Paragraph";
import FeatureImage from "../assets/Feature_Image.svg";

const OpenAI = () => {
  let group = {
    data: [
      {
        title: "Improving end distrusts instantly",
        paragraph:
          "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
      },
      {
        title: "Become the tended active",
        paragraph:
          "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
      },
      {
        title: "Message or am nothing",
        paragraph:
          "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
      },
      {
        title: "Really boy law county",
        paragraph:
          "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
      },
    ],
    titleSize: "text-lg",
    paragraphMaxWidth: "max-w-sm",
    separation: "gap-7",
    position: "horizontal",
    paragraphSize: "text-sm",
  };
  return (
    <section className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-8">
          <Heading2TextGradient maxWidth="max-w-md" size="text-4xl">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </Heading2TextGradient>
          <small className="text-mydifferentorange">
            Request Early Access to Get Started
          </small>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <div className="flex flex-col gap-14">
            {group.data.map((element, index) => (
              <Heading3withLineGradient
                text={element.title}
                size={group.titleSize}
                key={index}
              />
            ))}
          </div>
          <div className="col-start-2 col-end-4">
            <div className="flex flex-col gap-16">
              {group.data.map((element, index) => (
                <div className="relative -top-5">
                  <Paragraph
                    text={element.paragraph}
                    size={group.paragraphSize}
                    maxWidth={group.paragraphMaxWidth}
                    key={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center">
        <figure className="justify-self-end">
          <img src={FeatureImage} alt="girl with a vr headset" />
        </figure>
        <div className="justify-self-start flex flex-col gap-6 relative top-20 left-2">
          <div className="flex flex-col gap-5">
            <small className="text-mylightblue">
              Request Early Access to Get Started
            </small>
            <Heading2TextGradient size="text-4xl" maxWidth="max-w-md">
              The possibilities are beyond your imagination
            </Heading2TextGradient>
          </div>
          <Paragraph maxWidth="max-w-md">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </Paragraph>
          <small className="text-mydifferentorange">
            Request Early Access to Get Started
          </small>
        </div>
      </div>
    </section>
  );
};

export default OpenAI;
