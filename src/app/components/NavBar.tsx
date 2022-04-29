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
                <ul className="li">
                  <li>
                    <a className="Home" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/vegetarianos">Vegetarianos</a>
                  </li>
                  <li>
                    <a href="/MainPlatos">Platos principales</a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
