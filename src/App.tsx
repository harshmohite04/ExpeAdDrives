import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUP from "./components/SignUP";
import PowerOfAdvertisment from "./components/PowerOfAdvertisment";
import Services from "./components/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PowerOfAdvertisment/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUP/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
