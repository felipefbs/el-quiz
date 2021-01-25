import styled from "styled-components";
import Widget from "../src/components/Widget";
import db from "../db.json";

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
