import React from "react";
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
span {
  color : red;
  font-size : 12px;
}
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <h1>Hi, I'm an app!</h1>
    <h2>Hi, I'm an app!</h2>
    <span>글귀 3</span>
  </React.Fragment>
);

export default App;