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

export default userSlice;
