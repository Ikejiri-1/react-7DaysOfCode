import logo from "../assets/logo.png";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 20px 0;
  margin: 0 auto;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  padding: 25px 0;
`;
const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #000;

  position: relative;
  &:not(:last-child)::after {
    content: "/";
    color: #000;
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
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
                  <Link href="#">{item}</Link>
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
