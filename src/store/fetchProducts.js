import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ category, search, skip }, { rejectWithValue }) => {
    try {
      let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
      if (category) url = `https://dummyjson.com/products/category/${category}?limit=10&skip=${skip}`;
      if (search) url = `https://dummyjson.com/products/search?q=${search}&limit=10&skip=${skip}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);