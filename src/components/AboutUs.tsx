import { useEffect, useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Truck2 from "../assets/truck2.jpg";
import Person1 from "../assets/Person1.jpg";
import Person2 from "../assets/Person2.jpg";
import Person3 from "../assets/Person3.jpg";
import Person4 from "../assets/Person4.jpg";

import TeamCards from "./compo/TeamCards";
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
      <div className="flex flex-col items-center  my-10">
        <div className="font-bold text-6xl mb-10">Our Mission</div>

        <div className="w-full min-h-[200vh] grid place-items-center gap-y-20 ">
          <div
            className="w-1/2 h-96  grid place-content-center"
            data-aos="fade-up"
          >
            <span className="text-white">
              <img src={Truck2} alt="" className="h-4/5 justify-self-center" />
            </span>
          </div>
          <div
            className="w-1/2 h-96  grid place-content-center"
            data-aos="fade-up"
          >
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </span>
          </div>
          <div
            className="w-1/2 h-96  grid place-content-center"
            data-aos="fade-up"
          >
            <span className="text-white text-2xl">
              Transforming Mobility into Marketing! We don’t just advertise—we
              move brands forward! Imagine your brand on wheels, reaching the
              right audience at the right time. Our mission is simple: turn
              commercial vehicles into dynamic, data-driven billboards that
              maximize visibility and impact. Through cutting-edge technology
              and storytelling, we create high-engagement campaigns that make
              brands impossible to ignore. Why stay still when your brand can
              move? Let’s drive your success together!
            </span>
          </div>
          <div
            className="w-1/2 h-96  grid place-content-center"
            data-aos="fade-up"
          >
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </span>
          </div>
          <div className="w-1/2 grid place-content-center" data-aos="fade-up">
            <span className="text-white text-6xl font-bold">
              How we Started.
            </span>
          </div>

          {/* <div
            className="w-2/3 grid bg-black py-10 rounded-2xl"
            data-aos="fade-up"
          >
            <div className="flex px-10">
              <div className="w-2/3" data-aos="fade-up-right">
                <img
                  src={Image1}
                  alt="fdfd"
                  className="w-100 justify-self-center rounded-full"
                  
                />
                <div className="text-center text-2xl">Harsh Mohite </div>
              </div>
              <div className=" py-10 px-5 text-center" data-aos="fade-up-left">The golden sun dipped below the horizon, painting the sky with hues of orange and purple. A gentle breeze rustled through the towering trees, whispering secrets of the past. Somewhere in the distance, the sound of laughter echoed, blending with the rhythmic chirping of crickets. In that moment, time stood still, and everything felt infinite.</div>
            </div>
          </div> */}
          <TeamCards
            image={Person1}
            name="Sayamee Oswal"
            description="I am a pre-final year engineering student with a strong focus on human resource management and social media strategy. At Expe Ad Drives, I manage HR operations and social media presence, ensuring efficient team coordination, talent acquisition, and content-driven brand engagement. My role involves strategizing and optimizing digital marketing efforts, enhancing audience reach, and maintaining a seamless workflow within the organization.I am actively involved in my family business, which has given me firsthand experience in business operations, management, and strategic decision-making. This exposure has strengthened my ability to analyze market trends, manage teams, and implement effective growth strategies. With a keen interest in organizational development and people management, I am looking forward to pursuing an MBA in HR to further refine my expertise in building high-performing teams and driving business growth through effective workforce strategies."
          />
          <TeamCards
            image={Person2}
            name="Prajwal"
            description="The golden sun dipped below the horizon, painting the sky with hues of orange and purple. A gentle breeze rustled through the towering trees, whispering secrets of the past. Somewhere in the distance, the sound of laughter echoed, blending with the rhythmic chirping of crickets. In that moment, time stood still, and everything felt infinite."
          />
          <TeamCards
            image={Person3}
            name="Vidisha Munot"
            description="The golden sun dipped below the horizon, painting the sky with hues of orange and purple. A gentle breeze rustled through the towering trees, whispering secrets of the past. Somewhere in the distance, the sound of laughter echoed, blending with the rhythmic chirping of crickets. In that moment, time stood still, and everything felt infinite."
          />
          <TeamCards
            image={Person4}
            name=""
            description="The golden sun dipped below the horizon, painting the sky with hues of orange and purple. A gentle breeze rustled through the towering trees, whispering secrets of the past. Somewhere in the distance, the sound of laughter echoed, blending with the rhythmic chirping of crickets. In that moment, time stood still, and everything felt infinite."
          />

         
        </div>
      </div>

      {/* Side Menu */}
      {isOn && (
        <div className="absolute top-0 right-0 w-1/7 bg-opacity-75 flex items-start mt-20 justify-end z-50">
          <div className="bg-zinc-700 text-white w-3/4 max-w-md p-6 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold">Menu</div>
              <Link to="/">
                <div className="cursor-pointer hover:scale-110">Home</div>
              </Link>
              <Link to="/services">
                <div className="cursor-pointer hover:scale-110">Services</div>
              </Link>
              <Link to="/aboutus">
                <div className="cursor-pointer hover:scale-110">About Us</div>
              </Link>
              <Link to="/contactus">
                <div className="cursor-pointer hover:scale-110">Contact Us</div>
              </Link>
              <Link to="/login">
                <div className="cursor-pointer hover:scale-110">Login</div>
              </Link>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
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
