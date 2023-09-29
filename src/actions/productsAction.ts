import { setProducts, addProduct, updateProduct, deleteProduct } from '../reducers/productsSlice';
import axios from 'axios';
import { API_URL } from '../utils/constants'
import { Dispatch } from 'redux';

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(API_URL + 'products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };
};

// export const createProduct = (productData: any) => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await axios.post(API_URL + 'products');
//       dispatch(addProduct(response.data));
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };
// };

export const createProduct = (productData: FormData) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(API_URL + 'products', productData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the appropriate content type
        },
      });
      dispatch(addProduct(response.data));
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };
};

export const updateproductOnServer = (productData: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${API_URL}products/${productData.id}`, productData);
      dispatch(updateProduct(response.data));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
};

export const deleteproductOnServer = (productId: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`${API_URL}products/${productId}`);
      dispatch(deleteProduct(productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
};
