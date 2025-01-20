import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
