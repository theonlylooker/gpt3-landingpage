import React from "react";
import google from "../assets/google.svg";
import slack from "../assets/slack.svg";
import attlasian from "../assets/Bitmap.svg";
import dropbox from "../assets/dropbox.svg";
import shopify from "../assets/shopify.svg";
import headerFigure from "../assets/Header_Illustration.svg";
import avatar1 from "../assets/Ellipse_31.svg";
import avatar2 from "../assets/Ellipse_32.svg";
import avatar3 from "../assets/Ellipse_33.svg";
import avatar4 from "../assets/Ellipse_34.svg";
import avatar5 from "../assets/Ellipse_35.svg";
import avatar6 from "../assets/Ellipse_36.svg";
import avatar7 from "../assets/Ellipse_37.svg";

const Home = () => {
  return (
    <header>
      <div className="flex items-center">
        <div className="flex gap-10">
          <p>GPT-3</p>
          <nav>
            <ul className="flex gap-10">
              <li>Home</li>
              <li>What is GPT?</li>
              <li>Open AI</li>
              <li>Case Studies</li>
              <li>Library</li>
            </ul>
          </nav>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <div></div>
          <div className="col-start-3 flex gap-5 ">
            <button>Sign in</button>
            <button className="bg-orange-600 py-3 px-10 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="" style={{ color: "#81AFDD" }}>
            Yet bed any for travelling assistance indulgence unpleasing.
            <br /> Not thoughts all exercise blessing. Indulgence way
            <br /> everything joy alteration boisterous the attachment. Party
            <br /> we years to order allow asked of.
          </p>
          <div>
            <input
              className="h-12 w-96 rounded-l-md pl-7"
              id="emailAddress"
              type="email"
              placeholder="Your Email Address"
              style={{ background: "#052D56" }}
            />
            <button className="bg-orange-600 py-3 px-4 rounded-r-md">
              Get Started
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex ml-3 mr-3">
              <img className="-ml-3" src={avatar1} alt="user icon 1" />
              <img className="-ml-3" src={avatar2} alt="user icon 2" />
              <img className="-ml-3" src={avatar3} alt="user icon 3" />
              <img className="-ml-3" src={avatar4} alt="user icon 4" />
              <img className="-ml-3" src={avatar5} alt="user icon 5" />
              <img className="-ml-3" src={avatar6} alt="user icon 6" />
              <img className="-ml-3" src={avatar7} alt="user icon 7" />
              <div className="relative">
                <p
                  className="absolute top-3 right-1 text-black font-bold"
                  style={{ fontSize: "9px" }}
                >
                  1.6k+
                </p>
              </div>
            </div>
            <span className="text-xs">
              1,600 people requested access a visit in last 24 hours
            </span>
          </div>
        </div>
        <div>
          <figure>
            <img
              height={700}
              width={620}
              src={headerFigure}
              alt="header image"
            ></img>
          </figure>
        </div>
      </div>
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
    </header>
  );
};

export default Home;
