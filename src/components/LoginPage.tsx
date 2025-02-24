import { Link } from "react-router-dom";
import Truck10 from "../assets/truck10.jpg";
function LoginPage() {
  return (
    <div
      className="bg-white text-black justify-items-center h-screen content-center select-none"
      // style={{ backgroundImage: `url(${Truck10})`,backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
    >
      <div className="text-7xl my-5 font-bold">Login</div>
      <div className="flex flex-col w-1/5">
        <input
          // style={{ backgroundColor: "#B3B3B3" }}
          className="border-none px-2 rounded-sm mt-2 py-1 placeholder-gray-400 bg-zinc-700 text-white"
          placeholder="Username"
        />
        <input
          // style={{ backgroundColor: "#B3B3B3" }}
          className="border-none px-2 rounded-sm mt-2 py-1 placeholder-gray-400 bg-zinc-700 text-white"
          placeholder="Password"
        />
      </div>
      <Link to="/">
        <div
          className="text-white px-5 mt-2 rounded-sm py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-blue-400"
          // style={{ backgroundColor: "#B3B3B3" }}
        >
          Next
        </div>
      </Link>
      <div className="self-end">Privacy Policy</div>
    </div>
  );
}

export default LoginPage;


// import { signInWithGooglePopup } from "../../utils/firebase.utils"
// import { signInWithGooglePopup } from "../firebase";

// const LoginPage = () => {
//   const logGoogleUser = async () => {
//     try {
//       const userCredential = await signInWithGooglePopup();
//       console.log("User Info:", userCredential.user);
//     } catch (error) {
//       console.error("Error signing in:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={logGoogleUser}>Sign In With Google</button>
//     </div>
//   );
// };

// export default LoginPage;
