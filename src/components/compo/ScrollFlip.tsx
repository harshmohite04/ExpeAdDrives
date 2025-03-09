import { useState, useEffect } from "react";


import Truck1 from "../../assets/truck1.jpg"
const ScrollFlip = () => {
  const [activeText, setActiveText] = useState("Experience");

  const words = [
    "Experience",
    "Expedite",
    "Expedition",
    "Expertise",
    "Expectations",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const index = Math.min(
        Math.floor(scrollPosition / 300), // Change text every 300px scroll
        words.length - 1
      );
      setActiveText(words[index]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-10 flex flex-col pt-20 items-center h-[200vh]">
      <div className="flex flex-row items-center justify-around px-10 w-4/5 my-10 sticky top-20">
        {/* <img
          src={Truck1}
          className="w-1/2 rounded-2xl transition-all duration-500"
          alt=""
        /> */}
        <div className="">
          <div className="font-bold text-7xl text-center">We Bring</div>
          <div className="font-bold text-7xl text-center text-blue-500 transition-all duration-500">
            {activeText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollFlip;
