import styled from "styled-components";
import db from "../db.json";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: cover;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #4caf50;
  border-radius: 4px;
  background-color: #1c1814;
  overflow: hidden;
`;

Widget.content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.header>
            <h1>Teste</h1>
          </Widget.header>
          <Widget.content>
            <p> Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.content>
        </Widget>
        <Widget>
          <Widget.header>
            <h1>Teste</h1>
          </Widget.header>
          <Widget.content>
            <p> Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
