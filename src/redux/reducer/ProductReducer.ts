import {
  CLEAR_PRODUCTS,
  SET_CATEGORY,
  SET_GROUP_CATEGORY,
  SET_PRODUCTS,
  SET_PRODUCTS_ACCO_SIZE_AND_CATEGORY,
  SET_SIZE_CATEGORY,
  SET_SUB_CATEGORY,
} from '../../constant/ReduxConstant';

const initialState = {
  productsData: [],
  productCategory: [],
  productSubCategory: [],
  productGroupCategory: [],
  productSizeCategory: [],
  productAccoSizeAndCategory: [],
};

const ProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        productsData: action.payload,
      };

    case SET_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        productCategory: action.payload,
      };

    case SET_SIZE_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        productSizeCategory: action.payload,
      };

    case SET_GROUP_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        productGroupCategory: action.payload,
      };

    case SET_SUB_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        productSubCategory: action.payload,
      };

    case SET_PRODUCTS_ACCO_SIZE_AND_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        productAccoSizeAndCategory: action.payload,
      };

    case CLEAR_PRODUCTS:
      return {
        ...state,
        productsData: [],
      };

    default:
      return state;
  }
};

export default ProductReducer;
