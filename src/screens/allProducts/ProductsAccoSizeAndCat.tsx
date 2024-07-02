import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  LogBox,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import sizeAndCatStyle from './Styles';
import {FlatGrid} from 'react-native-super-grid';
import Spinner from '../../components/spinner/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {endLoading, startLoading} from '../../redux/action/SpinnerAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Root_URL} from '../../constant/APIURL';
import HeaderBar from '../../components/headerBar/HeaderBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {getProductsAccoSizeAndCategory} from '../../services/api';

import {
  CustomNavigationType,
  productRouteDataType,
  reduxStateType,
} from '../../utils/type';
import {saveProductsAccoSizeAndCategory} from '../../redux/action/ProductActions';

const ProductsAccoSizeAndCatScreen = () => {
  const navigation = useNavigation<CustomNavigationType>();
  const route = useRoute<productRouteDataType>();
  const {hardwareItem, cName, groupCatID, subCatID, sizeCatID} = route.params;
  const dispatch = useDispatch();
  const [networkState, setNetworkState] = useState(null);
  const {productAccoSizeAndCategory} = useSelector(
    (state: reduxStateType) => state?.ProductReducer,
  );

  const [firstImagePath, setFirstImagePath] = useState('');

  useEffect(() => {
    checkNetworkState();
    getHardwareItemsAccoSizeAndCategories();
    if (productAccoSizeAndCategory.length > 0) {
      setFirstImagePath(productAccoSizeAndCategory[0].imagepath);
    }
  }, []);

  const checkNetworkState = async () => {
    try {
      const state = await NetInfo.fetch();
      setNetworkState(state.isConnected);
    } catch (error) {
      console.error('Error checking network state:', error);
    }
  };

  const getHardwareItemsAccoSizeAndCategories = async () => {
    // Check network status
    const networkState = await NetInfo.fetch();
    try {
      if (networkState.isConnected) {
        dispatch(startLoading());
        var data = new FormData();
        data.append('categoryId', hardwareItem);
        data.append('sizeCatId', sizeCatID);
        data.append('subCatId', subCatID);
        data.append('groupCatId', groupCatID);
        getProductsAccoSizeAndCategory(data)
          .then(res => {
            dispatch(saveProductsAccoSizeAndCategory(res.data));
            dispatch(endLoading()); // Set loading to false when data is fetched
          })
          .catch(err => {
            console.log(err);
            dispatch(endLoading()); // Set loading to false in case of error
          });
      } else {
        dispatch(endLoading()); // Set loading to false if no internet connection
        Alert.alert('No internet connection, and no cached data available.');
      }
    } catch (error) {
      dispatch(endLoading()); // Set loading to false in case of error
      Alert.alert('Something went wrong... Try again later');
    }
  };

  return (
    <SafeAreaView style={sizeAndCatStyle.container}>
      <HeaderBar
        isMenu={false}
        page={cName}
        isHome={false}
        onPress={() => navigation.goBack()}
      />

      <Spinner />

      {productAccoSizeAndCategory.length > 0 ? (
        <FlatGrid
          itemDimension={700}
          data={productAccoSizeAndCategory}
          style={sizeAndCatStyle.gridView}
          spacing={10}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                sizeAndCatStyle.itemContainer,
                sizeAndCatStyle.shadowProp,
              ]}>
              {firstImagePath.trim() !== '' && (
                <Image
                  source={{
                    uri: networkState
                      ? `https://aws.erav.lk/everast/images/uploads/productimages${firstImagePath.replace(
                          'ges/uploads/productimage',
                          '',
                        )}`
                      : `file:///storage/emulated/0/ProductImages${firstImagePath.replace(
                          'ges/uploads/productimage',
                          '',
                        )}`,
                  }}
                  style={sizeAndCatStyle.image}
                  onError={error => {
                    console.error('Image loading error:', error);
                  }}
                  onLoad={() => console.log('Image loaded!')}
                />
              )}
              {firstImagePath.trim() == '' && (
                <Image
                  source={require('../../assets/images/picture.png')}
                  style={sizeAndCatStyle.image}
                />
              )}
              <Text style={sizeAndCatStyle.itemName}>
                {item?.product_name || 'N/A'}
              </Text>
              <Text style={sizeAndCatStyle.itemCode}>
                Item Code: {item?.product_code || 'N/A'}
              </Text>
              <Text style={sizeAndCatStyle.itemDetails}>
                Price (Rs.):{' '}
                {parseInt(item?.saleprice)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',') || 'N/A'}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={sizeAndCatStyle.noRequests}>No Products to show</Text>
      )}
    </SafeAreaView>
  );
};

export default ProductsAccoSizeAndCatScreen;
