function SignUP() {
  return (
    <div className="bg-black text-white justify-items-center h-screen content-center ">
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
      <div className="text-black px-5 mt-2 rounded-sm py-1" style={{ backgroundColor: "#B3B3B3" }}>Next</div>
      <div className="bottom-1">Privacy Policy</div>
    </div>
  );
}

export default SignUP;
