import { NavBar } from "./app/components/NavBar";
import { NewRecetes } from "./app/components/NewRecetes/NewRecetes";
import ProductsRecetes from "./app/components/ProductsRecetes";
import { SlideImage } from "./app/components/SlideImage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FooterPatrocinio } from "./app/components/FooterPatrocinio";

function App() {
  return (
    <Router>
      <NavBar />
      <SlideImage />
      <Routes>
        <Route path="/" element={<NewRecetes />} />
        <Route path="/product" element={<ProductsRecetes />} />
      </Routes>
      <FooterPatrocinio />
    </Router>
  );
}

export default App;
