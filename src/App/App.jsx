import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import ICard from "../Components/Card1/ICard";
import IICard from "../Components/Card2/IICard";
import IIICard from "../Components/Card3/IIICard";
import IVCard from "../Components/Card4/IVCard";
import VCard from "../Components/Card5/VCard";
import VICard from "../Components/Card6/VICard";
import VIICard from "../Components/Card7/VIICard";
import VIIICard from "../Components/Card8/VIIICard";
import IXCard from "../Components/Card9/IXCard";
import XCard from "../Components/Card10/XCard";
import XICard from "../Components/Card11/XICard";
import Test from "../Components/Test";
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
        <Route path="card7" element={<VIICard />} />
        <Route path="card8" element={<VIIICard />} />
        <Route path="card9" element={<IXCard />} />
        <Route path="card10" element={<XCard />} />
        <Route path="card11" element={<XICard />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
