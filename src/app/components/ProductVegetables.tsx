import React from "react";
import { Product } from "../interfaces/product/product.interface";

interface Props {
  product: Product;
  index: number;
}

export const ProductVegetables = ({ product }: Props) => {
  return (
    <div>
      <div className="container-cards">
        <div key={product.id}>
          <div className="card card-main" style={{ width: "16rem" }}>
            <div className="conta-hover">
              <div className="cont-image">
                <img
                  className="image-card image-main"
                  src={`https://spoonacular.com/cdn/ingredients_250x250/${product.image}`}
                  alt={product.name}
                />
              </div>
              <h3 className="text-names">
                <span className="first-name">{product.name}</span>
              </h3>
              <div className="card-body">
                <div className="cont-image">
                  <img
                    className="plate"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_portion_htgrvu.svg"
                    alt="plate"
                  />
                </div>
                <h3 className="subtitle-hover">
                  Pasillo
                  <br></br>
                  <span className="text-body">{product.aisle}</span>
                </h3>
              </div>
              <div className="cont-image">
                <img
                  className="plate"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic_time_rpd1cb.svg"
                  alt="plate"
                />
              </div>
              <div className="card-body">
                <h3 className="subtitle-hover">
                  Tiempo de preparación
                  <br></br>
                  <span className="text-body">{product.amount} minutos</span>
                </h3>
              </div>
              <div className="cont-image">
                <img
                  className="plate"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic_chef_xjhdkz.svg"
                  alt="plate"
                />
              </div>
              <div className="card-body">
                <h3 className="subtitle-hover">
                  Cantidad
                  <br></br>
                  <span className="text-body">{product.amount}</span>
                </h3>
              </div>
            </div>
            <div>
              <div className="card-body">
                <div className="card-califica">
                  <h2>
                    <img
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_star_htf5rb.svg"
                      alt="star"
                    />
                  </h2>

                  <img
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic-favorite_hreqej.svg"
                    alt="hearth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
