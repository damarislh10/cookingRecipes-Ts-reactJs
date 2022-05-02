import React from "react";
import { useState } from "react";
import { RecetesNew } from "./JsonNewRecetes";

interface IVer {
  id: number;
  ver: boolean;
  image: string;
  firName: string;
  secondName: string;
  star: number;
  sizePorcion: number;
  timePreparation: number;
  difficulty: string;
}
export const NewRecetes = () => {
  const [data, setData] = useState<IVer[]>([]);

  const modif = () => {
    setData(RecetesNew);
  };
  const verHover = (i: number): void => {
    modif();
    const newRecetes: IVer[] = [...data]; // busqueda arreglo copia del arreglo
    newRecetes[i].ver = !newRecetes[i].ver; // tengo recetas buscar una i actualizarlo con su propiedad ver a lo contrario
   
  };

  return (
    <>
      <div className="container">
        <h2 className="title-news">Nuevas Recetas</h2>
        <div className="container-cards">
          {RecetesNew.map((receteNew, index) => (
            <div key={index}>
              <div
                className="card"
                style={{ width: "16rem" }}
                onMouseEnter={() => verHover(index)}
              >
                {receteNew.ver ? (
                  <div className="conta-hover">
                    <div className="cont-image">
                      <img
                        className="image-card"
                        src={receteNew.image}
                        alt={receteNew.firName + receteNew.secondName}
                      />
                    </div>

                    <div className="card-body">
                      <div className="cont-image">
                        <img
                          className="plate"
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_portion_htgrvu.svg"
                          alt="plate"
                        />
                      </div>
                      <h3 className="subtitle-hover">
                        Tamaño de la porcion
                        <br></br>
                        <span className="text-body">
                          {receteNew.sizePorcion} raciones
                        </span>
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
                        <span className="text-body">
                          {receteNew.timePreparation} minutos
                        </span>
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
                        Dificultad
                        <br></br>
                        <span className="text-body">
                          {receteNew.difficulty}
                        </span>
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="cont-image">
                      <img
                        className="image-card"
                        src={receteNew.image}
                        alt={receteNew.firName + " " + receteNew.secondName}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="text-names">
                        <span className="first-name">{receteNew.firName}</span>
                        <span className="second-name">
                          {" "}
                          {receteNew.secondName}
                        </span>
                      </h3>
                      <div className="card-califica">
                        <h2>
                          <img
                            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_star_htf5rb.svg"
                            alt="star"
                          />
                          <span className="calificacion">
                            {receteNew.star}.0
                          </span>
                        </h2>

                        <img
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic-favorite_hreqej.svg"
                          alt="hearth"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
