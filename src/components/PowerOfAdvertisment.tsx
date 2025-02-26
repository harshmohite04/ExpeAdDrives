import { useEffect, useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Truck3 from "../assets/truck3.jpg";
import PowerBIReport from "./compo/PowerBIReport";
import axios from "axios";
import Home from "./dashboard/ecommerce";
function PowerOfAdvertisment() {
  const [isOn, setIsOn] = useState(false);

  // const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=YOUR_REPORT_ID";
  // const accessToken = "YOUR_ACCESS_TOKEN"; // Get this dynamically if required



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/", { withCredentials: true });
        console.log(response);
        console.log("hello world");
      } catch (error) {
        console.error(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="h-screen text-white bg-zinc-800 relative overflow-y-scroll ">
      <div className="flex flex-row justify-between px-10 py-1 top-0 bg-zinc-800 z-10 items-center">
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

      <div className="flex flex-col justify-start items-center h-screen ">
        <div className="font-bold text-6xl ">POWER OF ADVERTISEMENT</div>
        <div className="text-xl mt-4">In the Form of Fleet</div>
        {/* <PowerBIReport embedUrl={embedUrl} accessToken={accessToken} /> */}

        {/* <Home/> */}
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
              <Link to="/welcome">
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
        <div className="text-xl">Scroll Down to Know More</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 animate-bounce mx-auto mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      <div className="h-screen bg-zinc-600 flex flex-col pt-20 items-center">
        <div className="font-bold text-5xl w-1/2 text-center top-0">
          ADVERTISMENT THAT CHANGED BRAND VALUE AND REACH
        </div>
      </div>

      <div className="h-screen bg-zinc-900 flex flex-col justify-around items-center">
        <div className="w-2/3 h-1/4 flex flex-row">
          <div className="w-1/4 bg-zinc-500 h-full"></div>
          <div className="w-3/4 bg-white h-full text-black font-bold text-5xl py-4 px-2">
            WHY IS IT BETTER
          </div>
        </div>
        <div className="w-2/3 h-1/4  flex flex-row">
          <div className="w-3/4 text-end py-4 px-2 bg-white h-full text-black font-bold text-5xl ">
            WHAT YOU GET
          </div>
          <div className="w-1/4 bg-zinc-500 h-full"></div>
        </div>
        <div className="text-6xl text-white font-bold ">
          LEARN ABOUT THE SERVICES
        </div>
      </div>
      <div
        className="justify-self-center items-center"
        style={{ backgroundColor: "#000000" }}
      >
        <img src={Truck3} alt="" />
      </div>
      <div className="flex flex-col justify-around items-center bg-black py-30">
        <div
          className="font-extrabold text-5xl px-10 py-5 rounded-2xl text-black"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          Contact Us
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PowerOfAdvertisment;
