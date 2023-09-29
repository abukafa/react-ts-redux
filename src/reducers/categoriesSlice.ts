import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
  id: number;
  name: string;
}

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const updatedCategory = action.payload;
      const index = state.categories.findIndex((category) => category.id === updatedCategory.id);
      if (index !== -1) {
        state.categories[index] = updatedCategory;
      }
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload);
    },
  },
});

export const { setCategories, addCategory, updateCategory, deleteCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
