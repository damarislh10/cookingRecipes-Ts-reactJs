import { NavBar } from "./app/components/NavBar";
import { NewRecetes } from "./app/components/NewRecetes/NewRecetes";
import ProductsRecetes from "./app/components/ProductsRecetes";
import {SlideImage} from "./app/components/SlideImage";

function App() {
  return (
    <div>
      <NavBar/>
      <SlideImage/>
      <NewRecetes/>
      <ProductsRecetes />
    </div>
  );
}

export default App;
