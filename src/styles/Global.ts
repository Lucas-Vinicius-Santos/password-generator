import { shade } from "polished";
import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    outline: none;
  }

  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: ${colors.white}
  }

  button {
    display: flex;
    padding: 1rem 1.25rem;
    border-radius: 14px;
    background: ${colors.primary};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    border: 0;
    cursor: pointer;

    transition: all .2s;

    &:hover {
      background: ${shade(".2", colors.primary)}
    }
  }

  a {
    text-decoration: none;
    color: ${colors.white}
  }
`;
