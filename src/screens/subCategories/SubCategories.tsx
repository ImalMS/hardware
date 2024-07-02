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
  FlatList,
  ScrollView,
} from 'react-native';
import subCategoryStyle from './Styles';
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
  getProductsAccoSizeAndCategory,
  getSubCategoriesAccordingToMain,
} from '../../services/api';

import {
  CustomNavigationType,
  productRouteDataType,
  reduxStateType,
} from '../../utils/type';
import {
  saveProductsAccoSizeAndCategory,
  saveSubCategory,
} from '../../redux/action/ProductActions';
import MainStyles from '../../constant/MainStyles';

const SubCategoryScreen = () => {
  const navigation = useNavigation<CustomNavigationType>();
  const route = useRoute<productRouteDataType>();
  const {hardwareItem, cName, groupCatID} = route.params;
  const dispatch = useDispatch();

  const {productSubCategory} = useSelector(
    (state: reduxStateType) => state?.ProductReducer,
  );
  const [networkState, setNetworkState] = useState(null);
  const {productAccoSizeAndCategory} = useSelector(
    (state: reduxStateType) => state?.ProductReducer,
  );

  const [firstImagePath, setFirstImagePath] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    checkNetworkState();
    getHardwareItemsSubCategories();
  }, []);

  useEffect(() => {
    // Select the first subcategory if available
    if (productSubCategory.length > 0) {
      const firstSubCategory = productSubCategory[0];
      setSelectedSubCategory(firstSubCategory);
      getHardwareItemsAccoSizeAndCategories(firstSubCategory.id);
    }
  }, [productSubCategory]);

  useEffect(() => {
    // Update first image path when productAccoSizeAndCategory changes
    if (productAccoSizeAndCategory.length > 0) {
      setFirstImagePath(productAccoSizeAndCategory[0].imagepath);
    }
  }, [productAccoSizeAndCategory]);

  const flatListRef = useRef(null);

  const handleScrollLeft = () => {
    flatListRef.current.scrollToOffset({
      offset: 0,
      animated: true,
      animationDuration: 7000,
    });
  };

  const handleScrollRight = () => {
    flatListRef.current.scrollToEnd({animated: true, animationDuration: 7000});
  };

  const checkNetworkState = async () => {
    try {
      const state = await NetInfo.fetch();
      setNetworkState(state.isConnected);
    } catch (error) {
      console.error('Error checking network state:', error);
    }
  };

  const getHardwareItemsSubCategories = async () => {
    // Check network status
    const networkState = await NetInfo.fetch();
    try {
      if (networkState.isConnected) {
        dispatch(startLoading());
        var data = new FormData();
        data.append('producategory', hardwareItem);
        getSubCategoriesAccordingToMain(data)
          .then(res => {
            dispatch(saveSubCategory(res.data));
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
  const handleSubCategorySelection = (subcategory: any) => {
    setSelectedSubCategory(subcategory);
    getHardwareItemsAccoSizeAndCategories(subcategory.id);
  };

  const getHardwareItemsAccoSizeAndCategories = async (subCategoryId: any) => {
    // Check network status
    const networkState = await NetInfo.fetch();
    try {
      if (networkState.isConnected) {
        dispatch(startLoading());
        var data = new FormData();
        data.append('categoryId', hardwareItem);
        data.append('subCatId', subCategoryId);
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
    <SafeAreaView style={subCategoryStyle.container}>
      <HeaderBar
        isMenu={false}
        page={cName}
        isHome={false}
        onPress={() => navigation.goBack()}
      />

      <Spinner />

      <View>
        <View style={{width: '100%'}}>
          <Text style={subCategoryStyle.heading}>
            Select Sub Category of Product
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={handleScrollLeft}
              style={{
                zIndex: 1,
                marginHorizontal: 5,
                marginTop: -16,
              }}>
              <Image
                source={require('../../assets/images/left.png')}
                style={subCategoryStyle.image2}></Image>
            </TouchableOpacity>
            {productSubCategory.length > 0 ? (
              <FlatList
                ref={flatListRef}
                data={productSubCategory}
                horizontal
                contentContainerStyle={{flexGrow: 1}}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => handleSubCategorySelection(item)}
                    style={[
                      subCategoryStyle.itemContainer,
                      subCategoryStyle.shadowProp,
                      selectedSubCategory === item && {
                        backgroundColor: MainStyles.COLORS.YELLOW,
                      },
                    ]}>
                    <Text style={subCategoryStyle.category}>
                      {item?.category || 'N/A'}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <Text style={subCategoryStyle.noRequests}>
                No Sub categories to show
              </Text>
            )}
            <TouchableOpacity
              onPress={handleScrollRight}
              style={{
                zIndex: 1,
                marginRight: 5,
                marginLeft: 5,
                marginTop: -16,
              }}>
              <Image
                source={require('../../assets/images/right.png')}
                style={subCategoryStyle.image2}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={subCategoryStyle.heading}>Products Details</Text>
        </View>

        <View>
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
              style={subCategoryStyle.image}
              onError={error => {
                console.error('Image loading error:', error);
              }}
              onLoad={() => console.log('Image loaded!')}
            />
          )}
          {firstImagePath.trim() == '' && (
            <Image
              source={require('../../assets/images/picture.png')}
              style={subCategoryStyle.image}
            />
          )}
        </View>

        <View style={{paddingHorizontal: 16, marginBottom: 25}}>
          <View style={subCategoryStyle.tableHeader}>
            <Text style={subCategoryStyle.columnHeader}>
              Product Name & Size
            </Text>
            <Text style={subCategoryStyle.columnHeader}>Unit Price(Rs.)</Text>
            <Text style={subCategoryStyle.columnHeader}>Sale Price(Rs.)</Text>
          </View>
          <View style={{height: 300}}>
            {productAccoSizeAndCategory.length > 0 ? (
              <FlatList
                data={productAccoSizeAndCategory}
                scrollEnabled={true}
                renderItem={({item}) => (
                  <View>
                    <View style={subCategoryStyle.itemRow}>
                      <Text style={[subCategoryStyle.tableCell1, {flex: 6}]}>
                        {item?.product_name}
                      </Text>
                    </View>

                    <View style={subCategoryStyle.itemRow}>
                      <Text
                        style={[subCategoryStyle.tableCell, {flex: 1}]}></Text>
                      <Text style={[subCategoryStyle.tableCell, {flex: 1}]}>
                        {parseInt(item?.unitprice)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',') || 'N/A'}
                      </Text>

                      <Text style={[subCategoryStyle.tableCell, {flex: 1}]}>
                        {parseInt(item?.saleprice)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',') || 'N/A'}
                      </Text>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={subCategoryStyle.flatListContent}
              />
            ) : (
              <Text style={subCategoryStyle.noRequests}>
                No products to show
              </Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SubCategoryScreen;
