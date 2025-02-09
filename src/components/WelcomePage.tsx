import logo from "../assets/logo1.jpg";
import Truck7 from "../assets/truck7.jpg" 

import { Link } from "react-router-dom";
function WelcomePage() {
  return (
    <div
      className="bg-white text-black justify-items-center w-full h-screen content-center "
      // style={{ backgroundImage: `url(${Truck7})`,backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
    >
      <div
        className="text-6xl font-bold
"
      >
        WELCOME
      </div>
      <img src={logo} className="rounded-xl w-1/3 " alt="" />
      <div className="flex flex-row py-5 ">
        <Link to="/login">
        <div
          className="rounded-lg px-5 py-1 text-black mr-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
          style={{ background: "#B3B3B3" }}
          >
          Login As Client
        </div>
          </Link>
        {/* <div
          className="rounded-lg px-5 py-1 text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
          style={{ background: "#B3B3B3" }}
        >
          Login As Transport
        </div> */}
      </div>
      {/* <Link to="/signup">
        <div
          className="rounded-lg px-5 py-1 text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
          style={{ background: "#B3B3B3" }}
        >
          Sign Up
        </div>
      </Link> */}
    </div>
  );
}

export default WelcomePage;
