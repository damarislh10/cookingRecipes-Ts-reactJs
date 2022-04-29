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
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/vegeta">Vegetarianos</a>
                  </li>
                  <li>
                    <a href="/">Platos principales</a>
                  </li>
                  <li>
                    <a href="/">Tortas</a>
                  </li>
                  <li>
                    <a href="/">Comida rapida</a>
                  </li>
                  <li>
                    <a href="/">Menú niños</a>
                  </li>
                  <li>
                    <a href="/">Sopas</a>
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
