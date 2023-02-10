import React from "react";
import Heading1TextGradient from "./Heading1TextGradient";
import logo from "../assets/GPT-3.svg";

const Footer = () => {
  return (
    <footer className="bg-myfooterbackground flex flex-col gap-20 pt-44 pb-5">
      <div className="flex flex-col items-center text-center gap-16">
        <Heading1TextGradient size="text-6xl" maxWidth="max-w-4xl">
          Do you want to step in to the future before others
        </Heading1TextGradient>
        <button className="border-white border-solid border-2 p-5 text-lg">
          Request Early Access
        </button>
      </div>
      <div className="grid grid-cols-4 px-52">
        <div>
          <img src={logo} alt="logo de gpt-3"></img>
          <small>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </small>
        </div>
        <div className="justify-self-end">
          <h3 className="mb-6">Links</h3>
          <ul className="flex flex-col gap-6">
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="justify-self-end">
          <h3 className="mb-6">Company</h3>
          <ul className="flex flex-col gap-6">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="justify-self-end">
          <h3 className="mb-6">Get in Touch</h3>
          <ul className="flex flex-col gap-6">
            <li>
              Crechterwoord K12 <br /> 182 DK Alknjkcb
            </li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <small className="text-center">© 2021 GPT-3. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
