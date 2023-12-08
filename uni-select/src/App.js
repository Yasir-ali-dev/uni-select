import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Province from "./components/Province";
import Pro from "./components/Pro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index path="/" element={<Province />} />
        <Route path="/province" element={<Pro />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
