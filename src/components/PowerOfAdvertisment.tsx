import { useState } from "react";
import Logo from "../assets/logo2.png";
function PowerOfAdvertisment() {
  const [isOn, setIsOut] = useState(false);
  return (
    <div className="h-screen text-white" style={{ backgroundColor: "#505050" }}>
      <div className="flex flex-row justify-between px-10 ">
        <img src={Logo} alt="" className="w-1/12" />
        {isOn?<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-8 mt-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>:
        <div className="w-1/3 bg-red-500"></div>}
      </div>
      <div className="justify-self-center justify-items-center">
        <div className="font-bold text-6xl">POWER OF ADVERSTISMENT</div>
        <div className="text-xl">In the Form of Fleet</div>
      </div>
    </div>
  );
}

export default PowerOfAdvertisment;
