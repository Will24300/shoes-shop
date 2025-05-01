import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Main activeIndex={activeIndex} />
    </>
  );
}

export default Home;
