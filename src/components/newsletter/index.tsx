import styled from "styled-components";
import hero from "../../assets/imagem-hero.png";

import NewsLetterContent from "./newslettercontent/styled";

const NewsLetterMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  width: 60%;
  height: 975px;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 787px;
    height: 975px;
    background-image: url(${hero});
    position: absolute;
    --baseDistance: -287px;
    top: calc(var(--baseDistance) + 50px);
    right: 0;
    z-index: -1;
    pointer-events: none;
  }
`;

function NewsLetter() {
  return (
    <NewsLetterMain>
      <NewsLetterContent />
    </NewsLetterMain>
  );
}

export default NewsLetter;
