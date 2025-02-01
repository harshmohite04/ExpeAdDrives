import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUP from "./components/SignUP";
import PowerOfAdvertisment from "./components/PowerOfAdvertisment";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PowerOfAdvertisment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
