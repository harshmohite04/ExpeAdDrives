import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import PowerOfAdvertisment from "./components/PowerOfAdvertisment";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import PutData from "./components/PutData";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PowerOfAdvertisment />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/addData" element={<PutData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
