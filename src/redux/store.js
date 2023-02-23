import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../ReduxComp/users/userSlice'

export default configureStore({
    reducer: {
        users: userReducer
    }
})