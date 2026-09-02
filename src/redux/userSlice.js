import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    userRegister: (state, action) => {
      state.users.push(action.payload);
localStorage.setItem("users", JSON.stringify(state.users));
    },
    userLogin: () => {},
  },
});

export const { userRegister, userLogin } = userSlice.actions;
export default userSlice.reducer;
