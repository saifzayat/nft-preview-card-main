import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import ICard from "../Components/Card1/ICard";
import IICard from "../Components/Card2/IICard";
import IIICard from "../Components/Card3/IIICard";
import IVCard from "../Components/Card4/IVCard";
import VCard from "../Components/Card5/VCard";
import VICard from "../Components/Card6/VICard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="card1" element={<ICard />} />
        <Route path="card2" element={<IICard />} />
        <Route path="card3" element={<IIICard />} />
        <Route path="card4" element={<IVCard />} />
        <Route path="card5" element={<VCard />} />
        <Route path="card6" element={<VICard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
