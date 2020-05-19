import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isUserLoggedIn: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { loginStatus } = action.payload.loginStatus
      console.log(loginStatus)
      if (loginStatus) {
        state.isUserLoggedIn = !state.isUserLoggedIn
      }
    },
  },
})

export const selectorAuth = state => state.auth
export const { login } = authSlice.actions
export default authSlice.reducer
