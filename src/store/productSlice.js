import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './fetchCategories';
import { fetchProducts } from './fetchProducts';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    products: [],
    selectedCategory: '',
    searchTerm: '',
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.products = []; 
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.products = []; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload]; 
      });
  },
});

export const { setSelectedCategory, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
