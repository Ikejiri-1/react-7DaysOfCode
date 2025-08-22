import styled from "styled-components";
import logo from "../../../assets/logo.png";

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

function MenuContent() {
  const list = [
    "Como fazer",
    "Ofertas",
    "Depoimentos",
    "Vídeos",
    "Meu carrinho",
  ];
  return (
    <>
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
    </>
  );
}

export default MenuContent;
