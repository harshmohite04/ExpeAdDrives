import { useState, useEffect } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import Truck1 from "../assets/truck1.jpg";
import Footer from "./Footer";
import PDF from "../assets/Brochure.pdf";
import ScrollFlip from "./compo/ScrollFlip";
import { motion, AnimatePresence } from "framer-motion";
function Services() {
  const texts = [
    "EXPErience",
    "EXPEdite",
    "EXPEdition",
    "EXPErtise",
    "EXPEctations",
  ];
  const [index, setIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const now = Date.now();
      if (now - lastScrollTime < 1) return; // Prevent fast scrolling

      if (event.deltaY > 50 && index < texts.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
        setLastScrollTime(now);
      } else if (event.deltaY < -50 && index > 0) {
        setIndex((prevIndex) => prevIndex - 1);
        setLastScrollTime(now);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [index, lastScrollTime]);
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className="h-screen text-white relative overflow-y-scroll bg-gradient-to-r from-[#EA2222] to-[#1765C1]"
      style={{ backgroundColor: "#505050" }}
    >
      <div
        className="flex flex-row justify-between px-10 py-1 top-0 bg-gradient-to-r from-[#EA2222] to-[#1765C1] z-10 items-center"
        style={{ backgroundColor: "#505050" }}
      >
        <Link to="/" className="w-1/12 ">
          <img src={Logo} alt="Logo" className="" />
        </Link>
        {!isOn ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 mt-2 cursor-pointer"
            onClick={() => {
              setIsOn(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        ) : null}
      </div>

      <div className="flex flex-col justify-start items-center h-screen ">
        <div className="font-bold text-6xl ">BOOST BRAND RECALL.</div>
        <div className="text-xl mt-4">
          We craft impactful Advertising Experience that drive business growth
          with brand purpose at heart.
        </div>
      </div>

      {isOn && (
        <div className="absolute top-0 right-0 w-1/7 bg-opacity-75 flex items-start mt-20 justify-end z-50">
          <div className=" text-white w-3/4 max-w-md p-6 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold">Menu</div>
              <Link to="/">
                <div className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
                  Home
                </div>
              </Link>
              <Link to="/services">
                <div className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
                  Services
                </div>
              </Link>
              <Link to="/aboutus">
                <div className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
                  About Us
                </div>
              </Link>
              <Link to="/contactus">
                <div className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
                  Contact Us
                </div>
              </Link>
              <Link to="/login">
                <div className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
                  Login
                </div>
              </Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-4 cursor-pointer self-end"
              onClick={() => {
                setIsOn(false);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="text-8xl font-black">USING MOBILE BILLBOARDS!</div>
      </div>

      <div className="py-10 flex flex-col pt-20 items-center">
        <div
          style={{
            height: "100vh",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
          }}
        >
          <h1 className="text-8xl font-black">We Bring</h1>
          <AnimatePresence mode="wait">
            <motion.h2
              key={texts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-8xl font-black text-blue"
            >
              {texts[index]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      <div className=" flex flex-col items-center py-20">
        <div className="text-8xl font-bold">ENGAGE WITH THE SERVICES</div>
        <div className="steps"></div>
        <div
          className="text-white py-1 px-3 rounded-lg text-2xl my-5"
          style={{ backgroundColor: "#505050" }}
        >
          <a href={PDF} target="_blank" rel="noopener noreferrer">
            Download Brochure
          </a>
        </div>
        <Link to="/contactus">
          <div
            className="text-white py-1 px-3 rounded-lg text-2xl my-5"
            style={{ backgroundColor: "#505050" }}
          >
            Contact Us
          </div>
        </Link>
        <div className="font-bold text-5xl w-1/3 text-center">
          And get the Quote of your Brand Journey
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
