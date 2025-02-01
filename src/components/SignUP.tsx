import { Link } from "react-router-dom";
import Truck10 from "../assets/truck10.jpg" 
function SignUP() {
  return (
    <div className="bg-black text-white justify-items-center h-screen content-center" 
    style={{ backgroundImage: `url(${Truck10})`,backgroundSize:"contain", backgroundRepeat:"no-repeat" }}>
      <div className="text-7xl font-bold">SIGN UP</div>
      <div className="flex flex-col w-1/5 ">
      <input
          style={{ backgroundColor: "#B3B3B3" }}
          className="border-none px-2 rounded-sm mt-2 py-1"
          placeholder="Name"
        />
      <input
          style={{ backgroundColor: "#B3B3B3" }}
          className="border-none px-2 rounded-sm mt-2 py-1"
          placeholder="Mobile Number"
        />
      <input
          style={{ backgroundColor: "#B3B3B3" }}
          className="border-none px-2 rounded-sm mt-2 py-1"
          placeholder="Email ID"
        />
      <input
          style={{ backgroundColor: "#B3B3B3" }}
          className="border-none px-2 rounded-sm mt-2 py-1"
          placeholder="Password"
        />
        
      </div>
      <Link to="/">
      <div className="text-black px-5 mt-2 rounded-sm py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" style={{ backgroundColor: "#B3B3B3" }}>Next</div>
      </Link>
      <div className="self-end">Privacy Policy</div>
    </div>
  );
}

export default SignUP;
