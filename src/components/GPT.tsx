import React from "react";
import Heading2TextGradient from "./Heading2TextGradient";
import Heading3withLineGradient from "./Heading3withLineGradient";
import Paragraph from "./Paragraph";
const GPT = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-mybluebackground px-16 py-14 gap-y-24 ">
      <div className="text-2xl">
        <Heading3withLineGradient>What is GPT-3</Heading3withLineGradient>
      </div>
      <div className="col-start-2 col-end-4">
        <p className="text-mytextvariation max-w-[83%] relative -left-5 ">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="col-start-1 col-end-3 text-4xl">
        <Heading2TextGradient>
          The possibilities are beyond <br /> your imagination
        </Heading2TextGradient>
      </div>
      <small className="text-mydifferentorange self-center justify-self-center relative -right-20">
        Explore The Library
      </small>

      <div>
        <div className="mb-7 text-2xl">
          <Heading3withLineGradient>Chatbots</Heading3withLineGradient>
        </div>
        <div className="max-w-xs">
          <Paragraph>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </Paragraph>
        </div>
      </div>
      <div>
        <div className="mb-7 text-2xl">
          <Heading3withLineGradient>Knowledgebase</Heading3withLineGradient>
        </div>
        <div className="max-w-xs">
          <Paragraph>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </Paragraph>
        </div>
      </div>
      <div>
        <div className="mb-7 text-2xl">
          <Heading3withLineGradient>Education</Heading3withLineGradient>
        </div>
        <div className="max-w-xs">
          <Paragraph>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default GPT;
