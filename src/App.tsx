import React from "react";
import GPT from "./components/GPT";
import Home from "./components/Home";

function App() {
  return (
    <div className="App pt-8 px-20 text-white bg-myblack flex flex-col gap-32">
      <Home />
      <GPT />
    </div>
  );
}

export default App;
