import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";


const App = () => {
  return (
    <div className="body">


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
};

export default App;
