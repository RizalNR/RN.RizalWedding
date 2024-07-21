import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";

const App = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />

      </Routes>
    </div>
  );
};

export default App;
