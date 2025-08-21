import styled from "styled-components";
import MenuContent from "./menucontent/styled";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 10px 0;
  padding-bottom: 10em;
  margin: 0 auto;
`;

function Menu() {
  return (
    <>
      <Header>
        <MenuContent></MenuContent>
      </Header>
    </>
  );
}

export default Menu;
