import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Products } from "../interfaces/product/product.interface";
import { ProductService } from "../services/repositories/productService";
import { ADD_PRODUCTS } from "../store/actions/product/product.action";
import { CardProduct } from "./cards/CardProduct";

interface productStore {
  productReducer: any;
}

function ProductsRecetes() {
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
    <div>
      <div className="container">
        <h2 className="title-news">Recetas Principales</h2>
        <div className="container-cards">
          {results.products.map((item, index) => (
            <CardProduct key={index} product={{ ...item }} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsRecetes;
