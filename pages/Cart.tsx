import React from 'react';
import { Border } from '../styles/globelStyles';
import { CartIcon } from './../assert/icons';
import { Main } from './Wishlist';

function Cart() {
  return (
    <Main>
      <Border>
        <CartIcon />
      </Border>
      <p>Your Cart is empty</p>
    </Main>
  );
}

export default Cart;
