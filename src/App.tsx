import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GPT from "./components/GPT";
import Home from "./components/Home";
import Library from "./components/Library";
import OpenAI from "./components/OpenAI";

function App() {
  return (
    <div className="App text-white bg-myblack flex flex-col gap-32">
      <div className="pt-8 px-20 flex flex-col gap-32">
        <Home />
        <GPT />
        <OpenAI />
        <Banner />
        <Library />
      </div>
      <Footer />
    </div>
  );
}

export default App;
