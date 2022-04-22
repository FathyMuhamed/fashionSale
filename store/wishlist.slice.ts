import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: []as any,
  },
  reducers: {
    setWishlist(state, action) {
      state.items.push(action.payload) ;
    },
  },
});
export const { setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
