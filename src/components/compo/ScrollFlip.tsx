import React, { useState, useEffect } from "react";

const TextSlider = () => {
  const texts = ["EXPERIENCE", "EXPEDITE", "EXPLORE", "EXCEED"];
  const [index, setIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

  useEffect(() => {
    const handleScroll = (event) => {
      const now = Date.now();
      if (now - lastScrollTime < 1000) return; // Prevent fast scrolling

      if (event.deltaY > 50 && index < texts.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < -50 && index > 0) {
        setIndex((prevIndex) => prevIndex - 1);
      }

      setLastScrollTime(now);
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, [index, lastScrollTime]);

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1 style={{ position: "fixed", top: "40%", fontSize: "5rem", fontWeight: "bold" }}>
        WE BRING
      </h1>
      <div style={{ marginTop: "5rem", transition: "opacity 0.5s ease-in-out" }}>
        <h2 style={{ fontSize: "4rem", fontWeight: "lighter" }}>
          {texts[index]}
        </h2>
      </div>
    </div>
  );
};

export default TextSlider;
