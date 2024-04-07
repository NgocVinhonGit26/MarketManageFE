import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    role: "",
    token: "",
    name: "",
    id: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.id = action.payload.id;
        },
        setUserDefault: (state) => {
            state.role = "";
            state.token = "";
            state.name = "";
            state.id = 0;
        }
    }
})

export const { setUser, setUserDefault } = userSlice.actions;

export default userSlice.reducer;