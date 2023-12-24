import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { productService } from './ProductService'

export const getAllProducts = createAsyncThunk(
    'product/get-product', async (thunkAPI) => {
        try {
            return await productService.getProducts()
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const addToWishlist = createAsyncThunk(
    'product/wishlist', async (prodId, thunkAPI) => {
        try {
            return await productService.addToWishlist(prodId)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


const initialState = {
    products: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addToWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addToWishlist = action.payload;
                state.message = "Product added to wishlist"
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.error;
            })
    }
})

export default productSlice.reducer;