import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/about-me" element={<Home />} />
    </Routes>
  );
}

export default App;
