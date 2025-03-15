import Mockup1 from "../../assets/mockup1.png";
import Mockup2 from "../../assets/mockup2.png";

const Parallax = () => {
  return (
    <div>
      {/* Section 1 - Parallax Background */}
      <div
        className="h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Mockup1})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-6xl font-bold bg-black/50 px-6 py-3 rounded-lg">
          POWER OF ADVERTISEMENT
        </h1>
      </div>

      {/* Middle Section - Normal Scroll */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-center">
        <p className="text-xl">Experience the Future of Branding</p>
      </div>

      {/* Section 2 - Another Parallax Background */}
      <div
        className="h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Mockup2})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-6xl font-bold bg-black/50 px-6 py-3 rounded-lg">
          In the Form of Fleet
        </h1>
      </div>
    </div>
  );
};

export default Parallax;
