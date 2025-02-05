import { useEffect, useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos"; 
import "aos/dist/aos.css";
import Truck2 from "../assets/truck2.jpg"
import Truck3 from "../assets/truck3.jpg"
import Truck4 from "../assets/truck4.jpg"
import Truck5 from "../assets/truck5.jpg"
function AboutUs() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="min-h-screen text-white bg-zinc-800 relative overflow-y-auto">
      {/* Header */}
      <div className="flex flex-row justify-between px-10 py-1 bg-zinc-800 z-10 items-center">
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
            onClick={() => setIsOn(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center mt-10">
        <div className="font-bold text-6xl mb-10">Our Mission</div>

        <div className="w-full min-h-[200vh] grid place-items-center gap-y-20 p-28">
            <div
              className="w-1/2 h-96  grid place-content-center"
              data-aos="fade-up"
            >
              <span className="text-white"><img src={Truck2} className="rounded-lg" alt="" /> </span>
            </div>
            <div
              className="w-1/2 h-96  grid place-content-center"
              data-aos="fade-up"
            >
              <span className="text-white"><img src={Truck3} className="rounded-lg" alt="" /> </span>
            </div>
            <div
              className="w-1/2 h-96  grid place-content-center"
              data-aos="fade-up"
            >
              <span className="text-white"><img src={Truck4} className="rounded-lg" alt="" /> </span>
            </div>
            <div
              className="w-1/2 h-96  grid place-content-center"
              data-aos="fade-up"
            >
              <span className="text-white"><img src={Truck5} className="rounded-lg" alt="" /> </span>
            </div>
            
           
        </div>
      </div>

      {/* Side Menu */}
      {isOn && (
        <div className="absolute top-0 right-0 w-1/7 bg-opacity-75 flex items-start mt-20 justify-end z-50">
          <div className="bg-zinc-700 text-white w-3/4 max-w-md p-6 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold">Menu</div>
              <Link to="/"><div className="cursor-pointer hover:scale-110">Home</div></Link>
              <Link to="/services"><div className="cursor-pointer hover:scale-110">Services</div></Link>
              <Link to="/aboutus"><div className="cursor-pointer hover:scale-110">About Us</div></Link>
              <Link to="/contactus"><div className="cursor-pointer hover:scale-110">Contact Us</div></Link>
              <Link to="/login"><div className="cursor-pointer hover:scale-110">Login</div></Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-4 cursor-pointer self-end"
              onClick={() => setIsOn(false)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
