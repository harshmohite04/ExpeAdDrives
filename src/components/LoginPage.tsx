import React from "react";
import logo from "../assets/logo1.jpg";
function loginPage() {
  return (
    <div className="bg-black text-white justify-items-center h-screen content-center ">
      <div
        className="text-6xl font-bold
"
      >
        WELCOME
      </div>
      <img src={logo} className="rounded-xl w-1/3" alt="" />
      <div className="flex flex-row py-5 ">
        <div className="rounded-lg px-5 py-1 text-black mr-4" style={{ background: "#B3B3B3" }}>
          Login As Client
        </div>
        <div className="rounded-lg px-5 py-1 text-black" style={{ background: "#B3B3B3"}}>Login As Transport</div>
      </div>
        <div className="rounded-lg px-5 py-1 text-black" style={{ background: "#B3B3B3"}}>Sign Up</div>
    </div>
  );
}

export default loginPage;
