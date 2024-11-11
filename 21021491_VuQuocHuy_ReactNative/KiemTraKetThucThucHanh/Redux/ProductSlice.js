import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getApi = createAsyncThunk('products/getApi', async () => {
    const response = await axios.get('https://67150f4d33bc2bfe40b94064.mockapi.io/apiBike');
    return response.data;
});

export const addProductApi = createAsyncThunk('products/addProductApi', async (newProduct) => {
    const response = await axios.post('https://67150f4d33bc2bfe40b94064.mockapi.io/apiBike', newProduct);
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getApi.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addProductApi.fulfilled, (state, action) => {
                state.items.push(action.payload);
            });
    },
});

export const selectProducts = (state) => state.products.items;
export default productsSlice.reducer;