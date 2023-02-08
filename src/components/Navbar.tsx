import React from "react";

const Navbar = () => {
  return (
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
          <button className="bg-myorange py-3 px-10 rounded-md">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
