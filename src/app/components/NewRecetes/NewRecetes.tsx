import React from "react";
import { useState } from "react";
import { RecetesNew } from "./JsonNewRecetes";

export const NewRecetes = () => {
    const [show, setShow] = useState(1);

    const verDetail = () => {
        setShow(0);
      };

  return (
    <>
      <div className="container">
        <h2 className="title-news">Nuevas Recetas</h2>
        <div className="container-cards">
          {RecetesNew.map((receteNew) => (
            <div className="card" style={{ width: "16rem" }}>
               
              <div className="cont-image">
                <img
                  className="image-card"
                  src={receteNew.image}
                  alt={receteNew.firName + receteNew.secondName}
                />
              </div>
              <div className="card-body">
                <h3 className="text-names">
                  <span className="first-name">{receteNew.firName}</span>
                  <span className="second-name"> {receteNew.secondName}</span>
                </h3>
                <div className="card-califica">
                  <h2>
                    <img
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_star_htf5rb.svg"
                      alt="star"
                    />
                    <span className="calificacion"> {receteNew.star}.0</span>
                  </h2>

                  <img
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic-favorite_hreqej.svg"
                    alt="hearth"
                  />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
