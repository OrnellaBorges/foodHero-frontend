import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import adReducer from "./adSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        ads: adReducer,
    },
});

export default store;
