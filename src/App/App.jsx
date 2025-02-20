import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import FCard from "../Components/Card1/FCard";
import SCard from "../Components/Card2/SCard";
import TCard from "../Components/Card3/TCard";
import FFCard from "../Components/Card4/FFCard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="card1" element={<FCard />} />
        <Route path="card2" element={<SCard />} />
        <Route path="card3" element={<TCard />} />
        <Route path="card4" element={<FFCard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
