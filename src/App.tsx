import Logo from "assets/logo1.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUP from "./components/SignUP";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUP/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
