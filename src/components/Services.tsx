import logo from "../assets/logo2.png";
function Services() {
  return (
    <div className="h-screen bg-zinc-500">
      <div className="flex flex-row justify-between px-10 items-center top-0">
        <img src={logo} alt="" className="w-1/12" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
      <div className="">
        <div className="text-white font-bold text-6xl text-center">
          BOOST BRAND RECALL.
        </div>
        <div className="text-white text-center text-2xl py-2 w-1/2 justify-self-center">
          We craft impactful Advertising Experience that drive business growth
          with brand purpose at heart.
        </div>
      </div>
        <div className="font-black text-white text-8xl bg-red-500 absolute bottom-10 justify-self-center">USING MOBILE BILLBOARDS!</div>
    </div>
  );
}

export default Services;
