import styled from "styled-components";
import mailIcon from "../../../assets/mail.png";

const Title = styled.h1`
  font-family: "Montserrat", "sans serif";
  font-size: 22px;
  font-weight: 400;
  color: #756d6dff;
`;
const Span = styled.span`
  font-family: "Elsie Swash Caps", "cursive";
  font-size: 82px;
  font-weight: 900;
  color: #202020;
`;
const Text = styled.p`
  font-family: "Montserrat", "sans serif";
  font-size: 16px;
  font-weight: 400;
  color: #756d6dff;
  padding-top: 2em;
`;
const NewsLetterContainer = styled.div`
  max-width: 585px;
`;

const NewsLetterTextContainer = styled.div`
  max-width: 481px;
  margin-bottom: 32px;
`;

const EmailInput = styled.input`
  padding: 24px 55px;
  background-image: url(${mailIcon});
  background-repeat: no-repeat;
  background-position: 24px center;
  font-family: "Montserrat", "sans serif";
  font-size: 16px;
  font-weight: 400;
  border: none;
  &:focus {
    outline: none;
  }
`;
const EmailButton = styled.button`
  background-color: #ffcb47;
  color: #fff;
  border: none;
  padding: 24px;
  cursor: pointer;
  &:hover {
    background-color: #c99b28ff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
`;
const NewsLetterForm = styled.form`
  display: flex;
`;
function NewsLetterContent() {
  return (
    <>
      <NewsLetterContainer>
        <NewsLetterTextContainer>
          <Title>
            Sua casa com as <br />
            <Span>melhores plantas</Span>
          </Title>
          <Text>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </Text>
        </NewsLetterTextContainer>
        <NewsLetterForm>
          <EmailInput type="email" placeholder="Insira seu e-mail" required />
          <EmailButton>Assinar newsletter</EmailButton>
        </NewsLetterForm>
      </NewsLetterContainer>
    </>
  );
}

export default NewsLetterContent;
