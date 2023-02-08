import React from "react";
import google from "../assets/google.svg";
import slack from "../assets/slack.svg";
import attlasian from "../assets/Bitmap.svg";
import dropbox from "../assets/dropbox.svg";
import shopify from "../assets/shopify.svg";
const HeaderFooter = () => {
  return (
    <div>
      <ul className="flex justify-center gap-10">
        <li>
          <img src={google} alt="google logo" />
        </li>
        <li>
          <img src={slack} alt="slack logo" />
        </li>
        <li>
          <img src={attlasian} alt="attlasian logo" />
        </li>
        <li>
          <img src={dropbox} alt="dropbox logo" />
        </li>
        <li>
          <img src={shopify} alt="shopify logo" />
        </li>
      </ul>
    </div>
  );
};

export default HeaderFooter;
