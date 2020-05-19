import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isUserLoggedIn: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload
      if (username === "test" && password === "test") {
        state.isUserLoggedIn = !state.isUserLoggedIn
      }
    },
  },
})

export const selectorAuth = state => state.auth
export const { login } = authSlice.actions
export default authSlice.reducer
