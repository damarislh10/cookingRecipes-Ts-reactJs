import { NavBar } from "./app/components/NavBar";
import ProductsRecetes from "./app/components/ProductsRecetes";
import {SlideImage} from "./app/components/SlideImage";

function App() {
  return (
    <div>
      <NavBar/>
      <SlideImage/>
      <ProductsRecetes />
    </div>
  );
}

export default App;
