import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
