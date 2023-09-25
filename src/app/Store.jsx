import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/user/UserSlice'
import productReducer from '../features/products/ProductSlice'


export const  store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
    }
})