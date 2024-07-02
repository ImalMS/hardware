import {DrawerActions, useNavigation} from '@react-navigation/native';
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
import homeStyles from './Styles';
import {FlatGrid} from 'react-native-super-grid';
import Spinner from '../../components/spinner/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {endLoading, startLoading} from '../../redux/action/SpinnerAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Root_URL} from '../../constant/APIURL';
import HeaderBar from '../../components/headerBar/HeaderBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {
  getAllProductList,
  getProductCategoryList,
  getProductList,
} from '../../services/api';
import {saveCategory, saveProducts} from '../../redux/action/ProductActions';
import {CustomNavigationType, reduxStateType} from '../../utils/type';

const HomeScreen = () => {
  const navigation = useNavigation<CustomNavigationType>();

  const dispatch = useDispatch();
  const {productCategory, productsData} = useSelector(
    (state: reduxStateType) => state?.ProductReducer,
  );
  useEffect(() => {
    if (productCategory.length === 0) {
      getHardwareItemsCategories();
    }
    if (productsData.length === 0) {
      getProducts();
    }
  }, []);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleSyncPress = async () => {
    // Call the functions directly
    dispatch(startLoading());
    await getHardwareItemsCategories();
    await getProducts();
    dispatch(endLoading());
  };

  const getHardwareItemsCategories = async () => {
    dispatch(startLoading());

    // Check network status
    const networkState = await NetInfo.fetch();
    try {
      if (networkState.isConnected) {
        getProductCategoryList()
          .then(res => {
            dispatch(saveCategory(res.data));
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

  const getProducts = async () => {
    dispatch(startLoading());
    // Check network status
    const networkState = await NetInfo.fetch();
    try {
      if (networkState.isConnected) {
        getAllProductList()
          .then(res => {
            dispatch(saveProducts(res.data));
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

  const categoryImages = {
    'Power Tool Accessories': require('../../assets/images/tool.png'),
    'Hand Tools': require('../../assets/images/hand.png'),
    'General Hardware': require('../../assets/images/general.png'),
    'Sanitary Wares': require('../../assets/images/sanitary.png'),
    'Iron Oxide': require('../../assets/images/iron.png'),
    'Door Lock': require('../../assets/images/door.png'),
    default: require('../../assets/images/tools.png'),
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      <HeaderBar
        isMenu={true}
        page="Everest Hardware"
        isHome={true}
        onSync={handleSyncPress}
      />

      <View style={homeStyles.imageView}>
        <Image
          source={require('../../assets/images/everest.png')}
          style={homeStyles.imageStyle}
        />
      </View>
      <Spinner />
      {productCategory.length > 0 ? (
        <FlatGrid
          itemDimension={190}
          data={productCategory}
          style={homeStyles.gridView}
          spacing={10}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[homeStyles.itemContainer, homeStyles.shadowProp]}
              onPress={() => {
                navigation.navigate(
                  'ItemScreen' as never,
                  {
                    hardwareItem: item?.id,
                    cName: item?.category,
                  } as never,
                );
              }}>
              <Image
                source={
                  categoryImages[item?.category] || categoryImages['default']
                }
                style={homeStyles.image}></Image>
              <Text style={homeStyles.itemName}>{item?.category || 'N/A'}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={homeStyles.noRequests}>No categories to show</Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
