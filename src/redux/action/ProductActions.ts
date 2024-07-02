import {
  CLEAR_PRODUCTS,
  SET_CATEGORY,
  SET_GROUP_CATEGORY,
  SET_PRODUCTS,
  SET_PRODUCTS_ACCO_SIZE_AND_CATEGORY,
  SET_SIZE_CATEGORY,
  SET_SUB_CATEGORY,
} from '../../constant/ReduxConstant';

export const saveProducts =
  (data: any[]) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_PRODUCTS,
      payload: data,
    });
  };

export const saveCategory =
  (data: any[]) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_CATEGORY,
      payload: data,
    });
  };

export const saveGroupCategory =
  (data: any[]) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_GROUP_CATEGORY,
      payload: data,
    });
  };

export const saveSizeCategory =
  (data: any[]) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_SIZE_CATEGORY,
      payload: data,
    });
  };

export const saveSubCategory =
  (data: any[]) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_SUB_CATEGORY,
      payload: data,
    });
  };

export const saveProductsAccoSizeAndCategory =
  (data: any[]) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_PRODUCTS_ACCO_SIZE_AND_CATEGORY,
      payload: data,
    });
  };

export const removeAllProducts =
  (data: any[]) => (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: CLEAR_PRODUCTS,
    });
  };
