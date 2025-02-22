import { useState } from "react";
import Logo from "../assets/logo3.jpg";
import Truck1 from "../assets/truck1.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function ContactUs() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="h-screen bg-black text-white relative overflow-y-scroll pt-10">
      <div className="">
        <div className="flex flex-row justify-between px-10 py-1 top-0 bg-black z-10">
        <Link to="/" className="w-1/12">
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
                <Link to="/contactUs">
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
      </div>

      <div className="flex flex-row justify-center items-center h-2/3">
        <div className="font-bold text-6xl px-10">Now we’re talking</div>
        <img src={Truck1} className="w-1/5 rounded-2xl" alt="" />
      </div>

      <div className="flex flex-row-center justify-self-center w-1/2 pb-10">
        <div className="flex flex-col px-10 border-r-2 w-1/2">
          <input
            placeholder="Name"
            className="bg-zinc-600 mt-2 px-2 py-1 rounded-lg placeholder-white"
          />
          <input
            placeholder="Company"
            className="bg-zinc-600 mt-2 px-2 py-1 rounded-lg placeholder-white"
          />
          <input
            placeholder="Email"
            className="bg-zinc-600 mt-2 px-2 py-1 rounded-lg placeholder-white"
          />
          <input
            placeholder="Mobile No"
            className="bg-zinc-600 mt-2 px-2 py-1 rounded-lg placeholder-white"
          />
          <input
            placeholder="Message"
            className="bg-zinc-600 mt-2 px-2 py-1 rounded-lg h-32 placeholder-white"
          />
          <div className="bg-zinc-600 mt-4 px-2 py-1 rounded-lg w-1/3 text-center self-center select-none">
            Submit
          </div>
        </div>
        <div className="flex flex-col px-10 w-1/2">
          <div className="text-4xl font-bold">Contact with us</div>
          <div className="bg-zinc-600 mt-2 px-2 py-1 rounded-lg">
          +91 8180861415
          </div>
          <div className="bg-zinc-600 mt-2 px-2 py-1 rounded-lg">
          expeaddrives@gmail.com

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
