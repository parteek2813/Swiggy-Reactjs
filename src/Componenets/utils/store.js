import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; //exporting by default reducer

const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
});

export default store;

