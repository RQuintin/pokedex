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
        state.isUserLoggedIn = true
      }
    },
    logout: (state, action) => {
      state.isUserLoggedIn = false
    },
  },
})

export const selectorAuth = state => state.auth
export const { login, logout } = authSlice.actions
export default authSlice.reducer
