import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],

  reducers: {
    addUsers: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    // deleteUsers: (state) => {
    //   return initialState;
    // },
  },
});

export const { addUsers } = userSlice.actions;

export const selectUser = (state) => state.user; //useSelector

export default userSlice.reducer;
