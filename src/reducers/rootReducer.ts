import { combineReducers } from 'redux';
import CategoriesSlice from './categoriesSlice'; 
import ProductsSlice from './productsSlice'; 
import VariantsSlice from './variantsSlice'; 

const rootReducer = combineReducers({
  categories: CategoriesSlice, 
  products: ProductsSlice, 
  variants: VariantsSlice, 
});

export default rootReducer;
