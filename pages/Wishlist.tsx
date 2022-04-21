import React from 'react';
import styled from 'styled-components';
import { WishlistIcon } from '../assert/icons';
import { Border } from '../styles/globelStyles';
export const Main = styled.div`
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 40vw)); */
  font-size: 2.3rem;
  height: 100vh;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  p {
    font-size: 1.3rem;
    line-height: 1.1rem;
    letter-spacing: -0.1rem;
    padding-top: 1.5rem;
  }
`;

export default function Wishlist() {
  return (
    <Main>
      <Border>
        <WishlistIcon />
      </Border>
      <p>Your wishlist is empty</p>
    </Main>
  );
}

