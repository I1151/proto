import { createSlice } from "@reduxjs/toolkit";

// create user reducer
const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {

    }
})

export default userSlice.reducer