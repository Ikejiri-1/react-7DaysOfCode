import logo from "../assets/logo.png";

function Menu() {
  const list = [
    "Como fazer",
    "Ofertas",
    "Depoimentos",
    "Vídeos",
    "Meu carrinho",
  ];
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo da Casa Verde" />
        </div>
        <div>
          <nav>
            <ul>
              {list.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Menu;
