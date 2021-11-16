import styled, { css } from "styled-components";
import { shade } from "polished";

import colors from "./styles/colors";

import imgBg from "./assets/bgImg.svg";

interface SenhaFieldProps {
  isCopied: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  background: url(${imgBg}) no-repeat center;
  background-size: cover;
  flex: 1;
`;

export const Main = styled.main`
  padding: 6.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 700px;
  background: ${colors.black};

  text-align: center;

  h1 {
    font-size: 2.35rem;
    letter-spacing: 0.8rem;
  }

  @media (max-width: 700px) {
    padding: 4.5rem 1rem;
  }
`;

export const SenhaField = styled.div<SenhaFieldProps>`
  border: 1px solid ${colors.white};
  padding: 1rem;
  border-radius: 14px;

  width: 100%;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  h2 {
    font-size: 2rem;
  }

  button {
    border: 1px solid ${colors.white};
    background: ${colors.black};
    color: ${colors.white};

    &:hover {
      background: ${shade(".2", colors.black)};

      border-color: ${colors.primary};
      color: ${colors.primary};
    }
  }

  ${(props) =>
    props.isCopied &&
    css`
    h2 {
      font-size: 2rem;
      color: ${colors.secondary};
    }
    button {
      color: ${colors.secondary};
      border-color: ${colors.secondary};
  `}
`;
