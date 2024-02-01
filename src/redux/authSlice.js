import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile: {
        userName: "",
        email: "",
        password: "",
    },
    authentication: false,
    error: "",
    admin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login: (state, action) => {
            state.profile = action.payload
            state.authentication = true
            sessionStorage.setItem("authentication", true);
            state.admin = action.payload.admin ? true : false;
            sessionStorage.setItem("admin", state.admin);
        },
        logout: (state) => {
            state.profile = {
                userName: "",
                email: "",
                password: "",
            }
            state.authentication = false
            state.userName = ""
            state.email = ""
            state.password = ""
            sessionStorage.removeItem("authentication");
            sessionStorage.removeItem("admin");
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer