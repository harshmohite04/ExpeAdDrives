import { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function AboutUs() {
    const[isOn,setIsOn]=useState(false)
  return (
    <div className="h-screen text-white bg-zinc-800 relative overflow-y-scroll">
    <div className="flex flex-row justify-between px-10 py-1 top-0 bg-zinc-800 z-10">
      <img src={Logo} alt="Logo" className="w-1/12" />
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
      <div className="font-bold text-6xl ">Our Mission</div>
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
              </Link >
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



    <div className="h-screen bg-zinc-600 flex flex-col pt-20 items-center">
      
    </div>

    <div className="h-screen bg-zinc-900 flex flex-col justify-around items-center">
    
    </div>
    <Footer/>
  </div>
  )
}

export default AboutUs;