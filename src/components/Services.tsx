import { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import Truck1 from "../assets/truck1.jpg";
import Footer from "./Footer";
import PDF from "../assets/Brochure.pdf";
// import { motion } from "framer-motion";
function Services() {
  // const steps = [
  //   { text: "Step 1", x: "-32", y: "0" },
  //   { text: "Step 2", x: "-16", y: "-10" },
  //   { text: "Step 3", x: "16", y: "-10" },
  //   { text: "Step 4", x: "32", y: "0" },
  //   { text: "Step 5", x: "16", y: "10" },
  //   { text: "Step 6", x: "-16", y: "10" },
  // ];

  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className="h-screen text-white relative overflow-y-scroll"
      style={{ backgroundColor: "#505050" }}
    >
      <div
        className="flex flex-row justify-between px-10 py-1 top-0 bg-zinc-800 z-10 items-center"
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
          <div className="bg-zinc-700 text-white w-3/4 max-w-md p-6 rounded-lg shadow-lg">
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

      <div className="py-10 bg-black flex flex-col pt-20 items-center">
        <div className="flex flex-row items-center justify-around px-10 w-4/5 my-10">
          <img src={Truck1} className="w-1/2 rounded-2xl" alt="" />
          <div className="">
            <div className="font-bold text-7xl text-center">We Bring</div>
            <div className="font-bold text-7xl text-center">EXPErience</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around px-10 w-4/5 my-10 ">
          <div className="">
            <div className="font-bold text-7xl text-center">We Bring</div>
            <div className="font-bold text-7xl text-center">EXPEdite</div>
          </div>
          <img src={Truck1} className="w-1/2 rounded-2xl" alt="" />
        </div>
        <div className="flex flex-row items-center justify-around px-10 w-4/5 my-10 ">
          <img src={Truck1} className="w-1/2 rounded-2xl" alt="" />
          <div className="">
            <div className="font-bold text-7xl text-center">We Bring</div>
            <div className="font-bold text-7xl text-center">EXPEdition</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around px-10 w-4/5 my-10 ">
          <div className="">
            <div className="font-bold text-7xl text-center">We Bring</div>
            <div className="font-bold text-7xl text-center">EXPErties</div>
          </div>
          <img src={Truck1} className="w-1/2 rounded-2xl" alt="" />
        </div>
        <div className="flex flex-row items-center justify-around px-10 w-4/5 my-10 ">
          <img src={Truck1} className="w-1/2 rounded-2xl" alt="" />
          <div className="">
            <div className="font-bold text-7xl text-center">We Bring</div>
            <div className="font-bold text-7xl text-center">EXPEctations</div>
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-col items-center py-20">
        <div className="text-8xl font-bold">ENGAGE WITH THE SERVICES</div>
        <div className="steps"></div>
        <div
          className="text-black py-1 px-3 rounded-lg text-2xl my-5"
          style={{ backgroundColor: "#505050" }}
        >
          <a href={PDF} target="_blank" rel="noopener noreferrer">
            Download Brochure
          </a>
        </div>

        <div
          className="text-black py-1 px-3 rounded-lg text-2xl my-5"
          style={{ backgroundColor: "#505050" }}
        >
          Contact Us
        </div>
        <div className="font-bold text-5xl w-1/3 text-center">
          And get the Quote of your Brand Journey
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
