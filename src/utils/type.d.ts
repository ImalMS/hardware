import {NavigationProp} from '@react-navigation/native';

type BaseRouteType = {
  key: string;
  name: string;
  params: any;
  path: string;
};

export declare interface productRouteDataType extends BaseRouteType {
  params: {
    hardwareItem: string;
    cName: string;
    groupCatID: string;
    subCatID: string;
    sizeCatID: string;
  };
}

export declare interface CustomNavigationType
  extends NavigationProp<ReactNavigation.RootParamList> {
  replace: (routeName: never, params?: never) => void;
  push: (routeName: never, params?: never) => void;
  pop: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  goBack: () => void;
}

export declare type productType = {
  id: string;
  product_name: string;
  productcode: string;
  unitprice: string;
  saleprice: string;
  barcode: string;
  rol: string;
  pices_per_box: string;
  retail: string;
  starpoints: string;
  category: string;
  groupcategory: string;
  subcategory: string;
  supplier: string;
  salediscount: string;
  retaildiscount: string;
  radioprice: string;
  additionaldiscount: string;
  commonname: string;
  size: string;
  sizecategory: string;
  productimagepath: string;
};

export declare type productsType = {
  id: string;
  product_code: string;
  product_name: string;
  size: string;
  unitprice: string;
  saleprice: string;
  category: string;
  groupCategory: string;
  subCategory: string;
  imagepath: string;
};

export declare type categoryType = {
  id: string;
  category: string;
};

export declare type reduxStateType = {
  ProductReducer: productReducerType;
  SpinnerReducer: spinnerReducerType;
};

export declare type productReducerType = {
  productsData: Array<productType>;
  productCategory: Array<categoryType>;
  productsSubData: Array<productType>;
  productGroupCategory: Array<categoryType>;
  productSubCategory: Array<categoryType>;
  productSizeCategory: Array<categoryType>;
  productAccoSizeAndCategory: Array<productsType>;
};

export declare type spinnerReducerType = {
  loading: boolean;
  spinnerMessage: string;
};
