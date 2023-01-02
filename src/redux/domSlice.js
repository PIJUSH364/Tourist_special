import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  zIndexValue: 3,
};

const domSlice = createSlice({
  name: 'dom',
  initialState,
  reducers: {
    changeZIndex: (state, action) => {
      state.zIndexValue = action.payload;
    },
  },
});

export default domSlice.reducer;
export const { changeZIndex } = domSlice.actions;
