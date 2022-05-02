import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Products } from "../../interfaces/product/product.interface";
import { ProductService } from "../../services/repositories/productService";
import { ADD_PRODUCTS } from "../../store/actions/product/product.action";
import { ProductVegetables } from "../ProductVegetables";

interface productStore {
  productReducer: any;
}

export const CardVegetables = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const { data } = await ProductService.getProducts();
      dispatch({ type: ADD_PRODUCTS, payload: data.extendedIngredients });
    })();
  }, [dispatch]);

  const results: Products = useSelector(
    (store: productStore) => store.productReducer,
    shallowEqual
  );

  return (
    <>
      <div className="container">
        <h2 className="title-news">Recetas Vegetarianas</h2>
        <div className="container-cards">
          {results.products.map((item, index) =>
            item.name === "cauliflower florets" ||
            item.name === "extra virgin olive oil" ||
            item.name === "garlic" ||
            item.name === "scallions" ? (
              <ProductVegetables
                key={index}
                product={{ ...item }}
                index={index}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};
