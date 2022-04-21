import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import wishlist from './wishlist.slice';
import cart from './cart.slice';
export const store = configureStore({
  reducer: {
    wishlist,
    cart,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
