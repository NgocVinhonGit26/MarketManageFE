import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    role: "",
    token: "",
    name: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.name = action.payload.name;

        },
        setUserDefault: (state) => {
            state.role = "";
            state.token = "";
            state.name = "";
        }
    }
})

export const { setUser, setUserDefault } = userSlice.actions;

export default userSlice.reducer;