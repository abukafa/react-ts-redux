import { setVariants, addVariant, updateVariant, deleteVariant } from '../reducers/variantsSlice';
import axios from 'axios';
import { API_URL } from '../utils/constants'
import { Dispatch } from 'redux';

export const fetchVariants = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(API_URL + 'Variants');
      dispatch(setVariants(response.data));
    } catch (error) {
      console.error('Error fetching Variants:', error);
    }
  };
};

export const createVariant = (variantData: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(API_URL + 'Variants');
      dispatch(addVariant(response.data));
    } catch (error) {
      console.error('Error creating Variant:', error);
    }
  };
};

export const updateVariantOnServer = (variantData: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${API_URL}variants/${variantData.id}`, variantData);
      dispatch(updateVariant(response.data));
    } catch (error) {
      console.error('Error updating Variant:', error);
    }
  };
};

export const deleteVariantOnServer = (variantId: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`${API_URL}variants/${variantId}`);
      dispatch(deleteVariant(variantId));
    } catch (error) {
      console.error('Error deleting Variant:', error);
    }
  };
};
