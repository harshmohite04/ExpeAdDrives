import { useEffect, useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Truck3 from "../assets/truck3.jpg";
// import PowerBIReport from "./compo/PowerBIReport";
import OverViewPage from "./dashboard/OverViewPage";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function PowerOfAdvertisment() {
  const [isOn, setIsOn] = useState(false);

  // const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=YOUR_REPORT_ID";
  // const accessToken = "YOUR_ACCESS_TOKEN"; // Get this dynamically if required

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/", {
          withCredentials: true,
        });
        console.log(response);
        console.log("hello world");
      } catch (error) {
        console.error(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
  return (
    <div className="h-screen text-white relative overflow-y-scroll bg-gradient-to-r from-[#EA2222] to-[#1765C1]">
      <div className="flex flex-row justify-between px-10 py-1 top-0 z-10 items-center">
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

      <div className="flex flex-col justify-start items-center h-screen">
        <div className="font-bold text-6xl ">POWER OF ADVERTISEMENT</div>
        <div className="text-xl mt-4">In the Form of Fleet</div>
        {/* <PowerBIReport embedUrl={embedUrl} accessToken={accessToken} /> */}
      </div>
      {/* <OverViewPage /> */}

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

      <div className="h-screen  flex flex-col pt-20 items-center">
        <div className="font-bold text-7xl w-1/2 text-center top-0 pb-20">
          ADVERTISMENT THAT CHANGED BRAND VALUE AND REACH
        </div>
        <div className="flex justify-around  " style={{ width: "80%" }}>
          <div className="">
            <div className="">
              <div
                className="w-1/2 h-50 grid place-content-center justify-self-center"
                data-aos="fade-up"
              >
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-50 animate-blink"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="text-2xl text-center w-5/6 justify-self-center">
              High Recall Rates
            </div>
          </div>
          <div className="">
            <div
              className="w-1/2 h-50  grid place-content-center  justify-self-center"
              data-aos="fade-up"
            >
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </span>
            </div>

            <div className="text-2xl text-center w-5/6 justify-self-center">
              Demographic Route Planning
            </div>
          </div>
          <div className="">
            <div
              className="w-1/2 h-50  grid place-content-center  justify-self-center"
              data-aos="fade-up"
            >
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </span>
            </div>

            <div className="text-2xl text-center  w-5/6 justify-self-center">
              Simplified Execution
            </div>
          </div>
          <div className="">
            <div
              className="w-1/2 h-50  grid place-content-center  justify-self-center"
              data-aos="fade-up"
            >
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </span>
            </div>

            <div className="text-2xl text-center w-5/6 justify-self-center">
              Get a proved Assumption of Impression
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen  flex flex-col justify-around items-center">
        {/* <div className="w-3/5 h-1/5 flex flex-row">
          <div className="w-1/4  h-full">
            <div className="text-2xl font-bold">• High Visibility</div>
            <div className="text-2xl font-bold">• Cost effective</div>
            <div className="text-2xl font-bold">• Targeted reach</div>
            <div className="text-2xl font-bold">• Additional income for vechile owners</div>
          </div>
          <div className="w-3/4  text-black font-bold text-center text-7xl py-4 px-2">
            WHY IS IT BETTER
          </div>
        </div>
        <div className="w-2/3 h-1/5  flex flex-row">

          <div className="w-3/5  py-4 px-2  h-full text-black font-bold text-7xl text-center ">
            WHAT YOU GET
          </div>
          <div className="w-1/2 pl-4">
            <div className="text-2xl font-bold">
            • Wide Audience engagement with moving billboards
            </div>
            <div className="text-2xl font-bold">
            • Customizable Campaigns tailored to business user
            </div>
            <div className="text-2xl font-bold">• Real time Analytics to track and performance</div>
            <div className="text-2xl font-bold">• Scalable solutions for business all sizes</div>
          </div>
        </div> */}

        <div className="flex text-black justify-center">
          <div className=" " style={{ width: "30%" }}>
            <div className="text-3xl font-semibold">• High Visibility</div>
            <div className="text-3xl font-semibold">• Cost effective</div>
            <div className="text-3xl font-semibold">• Targeted reach</div>
            <div className="text-3xl font-semibold">
              • Additional income for vechile owners
            </div>
          </div>
          <div className="text-7xl font-black p-10">WHY IS IT BETTER</div>
        </div>
        <div className="flex text-black justify-center">
          <div className="text-7xl font-black  p-10">WHAT YOU GET</div>
          <div className="ml-10" style={{ width: "40%" }}>
            <div className="text-3xl font-semibold">
              • Wide Audience engagement with moving billboards
            </div>
            <div className="text-3xl font-semibold">
              {" "}
              • Customizable Campaigns tailored to business user
            </div>
            <div className="text-3xl font-semibold">
              • Real time Analytics to track and performance
            </div>
            <div className="text-3xl font-semibold">
              • Scalable solutions for business all sizes
            </div>
          </div>
        </div>

        <div className="text-6xl  text-white font-bold ">
          LEARN ABOUT THE SERVICES
        </div>
      </div>
      {/* <div
        className="justify-self-center items-center"
        style={{ backgroundColor: "#000000" }}
      >
        <img src={Truck3} alt="" />
      </div> */}
      <div className="flex flex-col justify-around items-center mb-10">
        <Link to="/contactus">
          <div
            className="font-extrabold text-5xl px-10 py-5 rounded-2xl text-black"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            Contact Us
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default PowerOfAdvertisment;
