import React from "react";
import "../styles/FooterPatrocinio.scss";

export const FooterPatrocinio = () => {
  return (
    <>
      <div className="container container-footer">
        <div className="footer">
          <div className="grid">
            <div className="row row-footer">
              <div className="col">
                <h2 className="text-patroci">Con el patrocinio de</h2>
              </div>
              <div className="col">
                <img className="imgProdu" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261061/pruebatecnicaAranda/Grupo_7610_evzgpu.png" alt="mercado"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
