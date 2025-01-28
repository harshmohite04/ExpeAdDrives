import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUP from "./components/SignUP";
import PowerOfAdvertisment from "./components/PowerOfAdvertisment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUP/>} />
        <Route path="/powerOfAd" element={<PowerOfAdvertisment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
