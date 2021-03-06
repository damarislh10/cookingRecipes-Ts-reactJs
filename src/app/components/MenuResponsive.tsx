import React from "react";
import { Link } from "react-router-dom";
import "../styles/MenuResponsive.css";

export const MenuResponsive = () => {
  return (
    <>
      <div className="container ">
        <div className=" container-menu">
          <Link className="link-menu" to="/vegetarianos">
            <div className="cards-menu-top">
              <div className="card card-menu" style={{ width: "12rem" }}>
                <div className="cont-image image-menu">
                  <img
                    className="imgRespo"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic_vegetarian_fjss1m.svg"
                    alt="zanahorias"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-names">
                    <span className="first-name text-menu">Vegetarianos</span>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link className="link-menu" to="/product">
            <div className="cards-menu-top">
              <div className="card card-menu" style={{ width: "12rem" }}>
                <div className="cont-image image-menu">
                  <img
                    className="imgRespo"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_main_iqseoh.svg"
                    alt="main"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-names">
                    <span className="first-name text-menu">Principales</span>
                  </h3>
                </div>
              </div>
            </div>
          </Link>

          <Link className="link-menu" to="/">
            <div className="cards-menu-top">
              <div className="card card-menu" style={{ width: "12rem" }}>
                <div className="cont-image image-menu">
                  <img
                    className="imgRespo"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic_cake_bnep9e.svg"
                    alt="tortas"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-names">
                    <span className="first-name text-menu">Tortas</span>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link className="link-menu" to="/">
            <div className="cards-menu-top">
              <div className="card card-menu" style={{ width: "12rem" }}>
                <div className="cont-image image-menu">
                  <img
                    className="imgRespo"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261074/pruebatecnicaAranda/ic_fast-food_rfkads.svg"
                    alt="rapida"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-names">
                    <span className="first-name text-menu">Rapida</span>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link className="link-menu" to="/">
            <div className="cards-menu-top">
              <div className="card card-menu" style={{ width: "12rem" }}>
                <div className="cont-image image-menu">
                  <img
                    className="imgRespo"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_kids_e2jorn.svg"
                    alt="menuNi??os"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-names">
                    <span className="first-name text-menu">Men?? ni??os</span>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link className="link-menu" to="/">
            <div className="cards-menu-top">
              <div className="card card-menu" style={{ width: "12rem" }}>
                <div className="cont-image image-menu">
                  <img
                    className="imgRespo"
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_soup_yj1rqf.svg"
                    alt="sopas"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-names">
                    <span className="first-name text-menu">Sopas</span>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
