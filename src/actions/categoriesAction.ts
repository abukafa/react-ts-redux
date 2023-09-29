import { setCategories, addCategory, updateCategory, deleteCategory } from '../reducers/categoriesSlice';
import axios from 'axios';
import { API_URL } from '../utils/constants'
import { Dispatch } from 'redux';

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(API_URL + 'categories');
      dispatch(setCategories(response.data));
    } catch (error) {
      console.error('Error fetching Categories:', error);
    }
  };
};

export const createCategory = (categoryData: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(API_URL + 'categories');
      dispatch(addCategory(response.data));
    } catch (error) {
      console.error('Error creating Category:', error);
    }
  };
};

export const updateCategoryOnServer = (categoryData: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${API_URL}categories/${categoryData.id}`, categoryData);
      dispatch(updateCategory(response.data));
    } catch (error) {
      console.error('Error updating Category:', error);
    }
  };
};

export const deleteCategoryOnServer = (categoryId: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`${API_URL}categories/${categoryId}`);
      dispatch(deleteCategory(categoryId));
    } catch (error) {
      console.error('Error deleting Category:', error);
    }
  };
};
