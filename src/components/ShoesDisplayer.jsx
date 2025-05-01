import React, { useState, useEffect } from "react";
import { Shoes } from "./shoes/Shoes";

function ShoesDisplayer({ activeIndex }) {
  const [activeName, setActiveName] = useState("");
  const [shoesIndex, setShoesIndex] = useState(null);
  const [activeSize, setActiveSize] = useState(40);

  useEffect(() => {
    const shoesData = [
      { name: "jordan1", index: 2 },
      { name: "vapormax", index: 1 },
      { name: "airforce", index: 2 },
      { name: "jordan4", index: 2 },
      { name: "jordan11", index: 1 },
    ];

    if (shoesData[activeIndex]) {
      setActiveName(shoesData[activeIndex].name);
      setShoesIndex(shoesData[activeIndex].index);
    }
  }, [activeIndex]);

  const renderColorOptions = () => {
    const colors = {
      0: ["bg-[rgb(38,92,209)]", "bg-black", "bg-red-900"],
      1: ["bg-black", "bg-white", "bg-pink-400"],
      2: ["bg-white", "bg-gray-700", "bg-yellow-900"],
      3: ["bg-gray-400", "bg-white", "bg-black"],
      4: ["bg-white", "bg-red-700", "bg-black"],
    };

    return colors[activeIndex]?.map((color, idx) => (
      <span
        key={idx}
        className={`h-6 w-10 ${color} cursor-pointer`}
        onClick={() => setShoesIndex(idx)}
      ></span>
    ));
  };

  return (
    <section
      id="buyNow"
      className="w-[95%] mx-auto bg-gray-300 mt-20 mb-20 rounded px-4 py-10"
    >
      {Shoes[activeName]?.[shoesIndex]?.img ? (
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Shoes[activeName][shoesIndex].img}
              alt={activeName}
              className={`w-4/5 sm:w-3/4 md:w-full max-w-sm ${
                activeIndex === 4 ? "rotate-[-20deg] mt-6" : "rotate-[-20deg]"
              }`}
            />
          </div>

          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6">
              {Shoes[activeName][shoesIndex].name}
            </h1>
            <p className="text-gray-800 mb-6 px-4 md:px-0">
              {Shoes[activeName][shoesIndex].desc}
            </p>

            <h2 className="font-bold mb-3">Colors:</h2>
            <div className="flex justify-center items-center gap-3 mb-6">
              {renderColorOptions()}
            </div>

            <h2 className="font-bold mb-3">Sizes:</h2>
            <div className="flex justify-center gap-4 mb-6">
              {[40, 41, 42].map((size) => (
                <span
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-4 py-2 border rounded-md cursor-pointer ${
                    activeSize === size
                      ? "bg-black text-white font-bold"
                      : "bg-white text-black"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>

            <button className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black border border-black transition">
              BUY NOW!
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No image available</p>
      )}
    </section>
  );
}

export default ShoesDisplayer;
