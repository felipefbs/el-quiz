import styled from "styled-components";
import db from "../db.json";

import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";

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
    <QuizBackground backgroundImage={db.bg}>
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
        <Footer />
        <GitHubCorner projectURL="https://github.com/felipefbs" />
      </QuizContainer>
    </QuizBackground>
  );
}
