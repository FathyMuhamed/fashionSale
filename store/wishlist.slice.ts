import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    setWishlist(state, action) {
      state.items = action.payload;
    },
  },
});
export const { setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
