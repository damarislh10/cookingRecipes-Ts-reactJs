import React from "react";
import { useState } from "react";
import { RecetesNew } from "./JsonNewRecetes";

export const NewRecetes = () => {
  const [show, setShow] = useState(1);

  const verDetail = () => {
    setShow(0);
  };
  const volver = () => {
    setShow(1);
  };
  return (
    <>
      <div className="container">
        <h2 className="title-news">Nuevas Recetas</h2>
        <div className="container-cards">
          {RecetesNew.map((receteNew) => (
            <div>
              {show === 1 ? (
                <div
                  onMouseEnter={verDetail}
                  className="card"
                  style={{ width: "16rem" }}
                >
                  <div className="cont-image">
                    <img
                      className="image-card"
                      src={receteNew.image}
                      alt={receteNew.firName +" "+ receteNew.secondName}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="text-names">
                      <span className="first-name">{receteNew.firName}</span>
                      <span className="second-name">
                         {" "}{receteNew.secondName}
                      </span>
                    </h3>
                    <div className="card-califica">
                      <h2>
                        <img
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_star_htf5rb.svg"
                          alt="star"
                        />
                        <span className="calificacion">{receteNew.star}.0</span>
                      </h2>

                      <img
                        src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic-favorite_hreqej.svg"
                        alt="hearth"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onMouseLeave={volver}
                  className="card"
                  style={{ width: "16rem" }}
                >
                  <div className="cont-image">
                    <img
                      className="image-card"
                      src={receteNew.image}
                      alt={receteNew.firName + receteNew.secondName}
                    />
                  </div>
                  <div className="cont-image">
                    <img
                      className="plate"
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_portion_htgrvu.svg"
                      alt="plate"
                    />
                  </div>
                  <div className="card-body">
                    <h3>Tamaño de la porcion</h3>
                    <h3 className="text-body">
                      {receteNew.sizePorcion} raciones
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
                    <h3>Tiempo de preparación</h3>
                    <h3 className="text-body">
                      {receteNew.timePreparation} minutos
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
                    <h3>Dificultad</h3>
                    <h3 className="text-body">
                      {receteNew.difficulty}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
