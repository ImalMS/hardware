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
import sizeCategoryStyle from './Styles';
import {FlatGrid} from 'react-native-super-grid';
import Spinner from '../../components/spinner/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {endLoading, startLoading} from '../../redux/action/SpinnerAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Root_URL} from '../../constant/APIURL';
import HeaderBar from '../../components/headerBar/HeaderBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {getSizeCategoryList} from '../../services/api';

import {
  CustomNavigationType,
  productRouteDataType,
  reduxStateType,
} from '../../utils/type';
import {saveSizeCategory} from '../../redux/action/ProductActions';

const SizeCategoryScreen = () => {
  const navigation = useNavigation<CustomNavigationType>();
  const route = useRoute<productRouteDataType>();
  const {hardwareItem, cName, groupCatID, subCatID} = route.params;
  const dispatch = useDispatch();

  const {productSizeCategory} = useSelector(
    (state: reduxStateType) => state?.ProductReducer,
  );

  useEffect(() => {
    getHardwareItemsSizeCategories();
    console.log(productSizeCategory.length);
  }, []);

  const getHardwareItemsSizeCategories = async () => {
    dispatch(startLoading());

    // Check network status
    const networkState = await NetInfo.fetch();
    try {
      if (networkState.isConnected) {
        getSizeCategoryList()
          .then(res => {
            dispatch(saveSizeCategory(res.data));
          })
          .catch(err => {
            console.log(err);
          });

        dispatch(endLoading());
      } else {
        // No cached data and offline, show an appropriate message to the user
        dispatch(endLoading());
        Alert.alert('No internet connection, and no cached data available.');
      }
    } catch (error) {
      dispatch(endLoading());
      Alert.alert('Something went wrong... Try again later');
    }
  };

  return (
    <SafeAreaView style={sizeCategoryStyle.container}>
      <HeaderBar
        isMenu={false}
        page={cName}
        isHome={false}
        onPress={() => navigation.goBack()}
      />

      <Spinner />
      <View>
        <Text style={sizeCategoryStyle.heading}>
          Select Size Category of Product
        </Text>
      </View>
      {productSizeCategory.length > 0 ? (
        <FlatGrid
          itemDimension={190}
          data={productSizeCategory}
          style={sizeCategoryStyle.gridView}
          spacing={10}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                sizeCategoryStyle.itemContainer,
                sizeCategoryStyle.shadowProp,
              ]}
              onPress={() => {
                navigation.navigate(
                  'ProductsAccoSizeAndCatScreen' as never,
                  {
                    hardwareItem,
                    cName,
                    groupCatID,
                    subCatID,
                    sizeCatID: item.id,
                  } as never,
                );
              }}>
              <Text style={sizeCategoryStyle.itemName}>
                {item?.category || 'N/A'}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={sizeCategoryStyle.noRequests}>
          No Size categories to show
        </Text>
      )}
    </SafeAreaView>
  );
};

export default SizeCategoryScreen;
