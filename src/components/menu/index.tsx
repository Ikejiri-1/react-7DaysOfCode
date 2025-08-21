import logo from "../../assets/logo.png";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 10px 0;
  padding-bottom: 10em;
  margin: 0 auto;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 25px 0;
  gap: 16px;
`;
const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #000;
`;
const Link = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
`;
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
      <Header>
        <div>
          <img src={logo} alt="logo da Casa Verde" />
        </div>
        <div>
          <nav>
            <List>
              {list.map((item) => (
                <ListItem key={item}>
                  <Link href="#">{item} /</Link>
                </ListItem>
              ))}
            </List>
          </nav>
        </div>
      </Header>
    </>
  );
}

export default Menu;
