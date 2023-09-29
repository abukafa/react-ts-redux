import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  active: boolean;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex((product) => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
