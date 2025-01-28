import Logo from "assets/logo1.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
