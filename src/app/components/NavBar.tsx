import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

export function NavBar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="grid">
            <div className="row">
              <div className="col">
                <div className="title">
                  <span className="text1">Recipe</span>
                  <span className="text2">App</span>
                </div>
              </div>
              <div className="col">
                <ul className="li li-desktop">
                  <li>
                    <Link className="Home" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/vegetarianos">Vegetarianos</Link>
                  </li>
                  <li>
                    <Link to="/product">Platos principales</Link>
                  </li>
                  <li>
                    <a href="/tortas">Tortas</a>
                  </li>
                  <li>
                    <a href="/comidaRapida">Comida rapida</a>
                  </li>
                  <li>
                    <a href="/menu">Menú niños</a>
                  </li>
                  <li>
                    <a href="/sopas">Sopas</a>
                  </li>
                </ul>
                <ul className="li menu-responsive">
                  <li>
                    <Link className="Home" to="/">
                      <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1651261072/pruebatecnicaAranda/ic_home_a6wsjt.svg" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
