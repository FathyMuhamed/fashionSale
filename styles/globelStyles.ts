import styled, { createGlobalStyle } from 'styled-components';
import { QUERIES } from './mediaQueries';

export const GlobalStyles = createGlobalStyle`
    :root {
      --color-pry : #100F0E;
      --color-scd :#00000000;
      --color-text: #585858;
      --color-text-scd : #f5f5f5;
      --main-bn-color:#7b74f7;
      --second-bn-color: #5bd4ad;
      --max-container: 1440px;
      --center-container: 0 auto;
      --border-radius: 0.5rem;
      --transition: all 0.5s;

    }
    *::selection {
    background-color: #7b74f7;
  }
    html {
        scrollbar-width: none;
        font-weight: 100;

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    li {
        list-style: none;
    }
    h1,h2,h3,h4{
      font-weight: 500;
    }

    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }

    ::-webkit-scrollbar {
        display: none !important;
    }
    body {
        font-weight: 400;
        background-color: var(--color-scd);
        color: var(--color-pry);
        position: relative;
    }


    a {
        text-decoration: none;
        color: black;
        font-size: 0.8125rem;
        line-height: 1.5625rem;
        letter-spacing: 0.1rem;
        display: flex;
        align-items: center;
        transition: var(--transition);

        &:hover {
            transition: var(--transition);
            color: var(--color-pry-100);
        }

        &:active {
            transition: var(--transition);
            color: var(--color-pry-100);
        }
    }

    p {
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        letter-spacing: 0.05rem;
        color: var(--color-text);
    }
    .back {
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-text-scd);
    padding: 0.6rem;
    width: 100%;
    span{
      font-size: .9rem;
      color:var(--color-text);
    }
    @media ${QUERIES.mobile}{
      margin: 1rem auto 1rem;

    }
  }
`;

interface IButton {
  primary?: boolean;
}
export const Button = styled.button<IButton>`
  display: block;
  margin-top: 40px;
  padding: 14px 42px;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--main-bn-color);
  color: var(--main-bn-color);
  background-color: var(--color-scd);
  ${b =>
    b.primary &&
    'background: linear-gradient(to right, var(--second-bn-color), var(--main-bn-color)); color: white;'};

  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
`;

export const Container = styled.main`
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  max-width: var(--max-container);
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  color: var(--color-pry);
  display: flex;
  flex-direction: column;
`;

export const Border = styled.div`
  padding: 2rem;
  border-radius: 50%;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 10px;
  svg {
    color: var(--main-bn-color);
  }
`;
