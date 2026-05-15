// ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

// STYLES
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
