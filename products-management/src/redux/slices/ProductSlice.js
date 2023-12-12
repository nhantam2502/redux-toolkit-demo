import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productList: [],
};

const URL = "https://6571bc40d61ba6fcc0136622.mockapi.io/products";

export const ProductSlice = createSlice ({
    name: "product_list",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.productList = action.payload;
        })
    },
});

export const getProduct = createAsyncThunk("product_list/getProduct", async () => {
    try {
        const res = await axios.get(`${URL}`);
        return res.data;
    } catch (error) {
        console.log({error});
    }
});