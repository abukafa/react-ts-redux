import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Variant {
  id: number;
  name: string;
  active: boolean;
}

interface VariantsState {
  variants: Variant[];
}

const initialState: VariantsState = {
  variants: [],
};

const variantsSlice = createSlice({
  name: 'variants',
  initialState,
  reducers: {
    setVariants: (state, action: PayloadAction<Variant[]>) => {
      state.variants = action.payload;
    },
    addVariant: (state, action: PayloadAction<Variant>) => {
      state.variants.push(action.payload);
    },
    updateVariant: (state, action: PayloadAction<Variant>) => {
      const updatedVariant = action.payload;
      const index = state.variants.findIndex((variant) => variant.id === updatedVariant.id);
      if (index !== -1) {
        state.variants[index] = updatedVariant;
      }
    },
    deleteVariant: (state, action: PayloadAction<number>) => {
      state.variants = state.variants.filter((variant) => variant.id !== action.payload);
    },
  },
});

export const { setVariants, addVariant, updateVariant, deleteVariant } = variantsSlice.actions;

export default variantsSlice.reducer;
