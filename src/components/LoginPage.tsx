import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post('http://localhost:3000/login', {
    //     username: userName,
    //     password: password,
    //   });

    //   localStorage.setItem('token', response.data.token);
    //   console.log(response.data.token);
      
    //   navigate('/dashboardWhenlogIn');
    // } catch (error) {
      //   alert('Invalid credentials');
      // }
        navigate('/dashboardWhenlogIn');
  };

  return (
    <div className="text-white justify-items-center h-screen content-center select-none bg-gradient-to-r from-[#EA2222] to-[#1765C1]">
      <div className="text-7xl my-5 font-bold">Login</div>
      <div className="flex flex-col w-1/5">
        <input
          className="border-none px-2 rounded-sm mt-2 py-1 placeholder-gray-200 bg-zinc-700 text-white"
          placeholder="Username"
          value={focused || userName ? `#${userName}` : ""}
          onChange={(e) => {
            setUserName(e.target.value.replace("#", ""));
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            if (userName === "") setFocused(false);
          }}
        />
        <input
          className="border-none px-2 rounded-sm mt-2 py-1 placeholder-gray-200 bg-zinc-700 text-white"
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div
        onClick={handleLogin}
        className="text-white cursor-pointer px-5 mt-2 rounded-sm py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-blue-400"
      >
        Next
      </div>
      <div className="self-end">Privacy Policy</div>
    </div>
  );
}

export default LoginPage;
