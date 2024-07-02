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
import itemStyles from './Styles';
import {FlatGrid} from 'react-native-super-grid';
import Spinner from '../../components/spinner/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {endLoading, startLoading} from '../../redux/action/SpinnerAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Root_URL} from '../../constant/APIURL';
import HeaderBar from '../../components/headerBar/HeaderBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {getGroupCategoriesAccordingToMain} from '../../services/api';
import {saveGroupCategory} from '../../redux/action/ProductActions';
import {
  CustomNavigationType,
  productRouteDataType,
  reduxStateType,
} from '../../utils/type';
import {subCategoryImages} from '../../constant/SubCategoryImages';

const ItemScreen = () => {
  const navigation = useNavigation<CustomNavigationType>();
  const route = useRoute<productRouteDataType>();
  const {hardwareItem, cName} = route.params;
  const dispatch = useDispatch();

  const {productGroupCategory} = useSelector(
    (state: reduxStateType) => state?.ProductReducer,
  );

  useEffect(() => {
    getHardwareItemsGroupCategories();
  }, []);

  const getHardwareItemsGroupCategories = async () => {
    // Check network status
    const networkState = await NetInfo.fetch();
    try {
      if (networkState.isConnected) {
        dispatch(startLoading());
        var data = new FormData();
        data.append('producategory', hardwareItem);
        getGroupCategoriesAccordingToMain(data)
          .then(res => {
            dispatch(saveGroupCategory(res.data));
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
    <SafeAreaView style={itemStyles.container}>
      <HeaderBar
        isMenu={false}
        page={cName}
        isHome={false}
        onPress={() => navigation.navigate('HomeScreen' as never)}
      />

      <Spinner />
      {productGroupCategory.length > 0 ? (
        <FlatGrid
          itemDimension={190}
          data={productGroupCategory}
          style={itemStyles.gridView}
          spacing={10}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[itemStyles.itemContainer, itemStyles.shadowProp]}
              onPress={() => {
                navigation.navigate(
                  'SubCategoryScreen' as never,
                  {
                    hardwareItem,
                    groupCatID: item.id,
                    cName,
                  } as never,
                );
              }}>
              <Image
                source={
                  subCategoryImages[item?.category] ||
                  subCategoryImages['default']
                }
                style={itemStyles.image}></Image>
              <Text style={itemStyles.itemName}>{item?.category || 'N/A'}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={itemStyles.noRequests}>No Group categories to show</Text>
      )}
    </SafeAreaView>
  );
};

export default ItemScreen;
