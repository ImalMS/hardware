import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  LogBox,
  Modal,
  Pressable,
  TouchableOpacity,
  Alert,
  Button,
  PermissionsAndroid,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import HeaderBar from '../../components/headerBar/HeaderBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Root_URL} from '../../constant/APIURL';
import Spinner from '../../components/spinner/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {endLoading, startLoading} from '../../redux/action/SpinnerAction';
import productStyles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import RNFetchBlob from 'rn-fetch-blob';
import ModalDetails from '../../components/modalDetails/ModalDetails';
import ProductReducer from '../../redux/reducer/ProductReducer';
import {saveProducts} from '../../redux/action/ProductActions';
import {getProductList} from '../../services/api';
import {
  productRouteDataType,
  productType,
  reduxStateType,
} from '../../utils/type';

const ProductsHome = () => {
  const navigation = useNavigation();
  const route = useRoute<productRouteDataType>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  const [networkState, setNetworkState] = useState(null);
  const [products, setProducts] = useState<productType>();
  const {hardwareItem, cName} = route.params;
  const dispatch = useDispatch();
  const {productsData} = useSelector(
    (state: reduxStateType) => state?.ProductReducer,
  );

  useEffect(() => {
    checkNetworkState();
  }, []);

  const checkNetworkState = async () => {
    try {
      const state = await NetInfo.fetch();
      setNetworkState(state.isConnected);
    } catch (error) {
      console.error('Error checking network state:', error);
    }
  };

  return (
    <SafeAreaView style={productStyles.container}>
      <HeaderBar
        isMenu={false}
        isHome={false}
        onPress={() => navigation.navigate('HomeScreen' as never)}
        page={cName}
      />
      <Spinner />
      {/* Modal */}
      {/* <View style={productStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={productStyles.centeredView}>
            <View style={productStyles.modalView}>
              {selectedProductIndex !== null && (
                <React.Fragment>
                  <Text style={productStyles.line}>
                    Product: {products ? products?.product_name : 'N/A'}
                  </Text>
                  <ModalDetails
                    text1={'Product Name'}
                    text2={products ? products?.product_name : 'N/A'}
                  />
                  <ModalDetails
                    text1={'Product Code'}
                    text2={products ? products?.productcode : 'N/A'}
                  />
                  <ModalDetails
                    text1={'Unit Price'}
                    text2={products ? products?.unitprice : 'N/A'}
                  />
                  <ModalDetails
                    text1={'Sale Price'}
                    text2={products ? products?.saleprice : 'N/A'}
                  />
                  <ModalDetails
                    text1={'Retail Price'}
                    text2={products ? products?.retail : 'N/A'}
                  />
                  <ModalDetails
                    text1={'Sale Discount'}
                    text2={products ? products?.salediscount : 'N/A'}
                  />

                  <ModalDetails
                    text1={'Retail Discount'}
                    text2={products ? products?.retaildiscount : 'N/A'}
                  />

                  <ModalDetails
                    text1={'Additional Discount'}
                    text2={products ? products?.additionaldiscount : 'N/A'}
                  />
                  
                </React.Fragment>
              )}
              <Pressable
                style={[productStyles.button, productStyles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={productStyles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View> */}

      {productsData.length > 0 ? (
        <FlatGrid
          itemDimension={300}
          data={productsData?.filter(
            (item: productType) => item.category == hardwareItem,
          )}
          style={productStyles.gridView}
          spacing={10}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[productStyles.itemContainer, productStyles.shadowProp]}
              onPress={() => {
                setProducts(item);
              }}
              disabled={true}>
              <Image
                source={{
                  uri: networkState
                    ? `https://aws.erav.lk/everast/images/uploads/productimages${
                        item.productimagepath
                          ? item.productimagepath.replace(
                              'ges/uploads/productimage',
                              '',
                            )
                          : ''
                      }`
                    : `file:///storage/emulated/0/ProductImages${
                        item.productimagepath
                          ? item.productimagepath.replace(
                              'ges/uploads/productimage',
                              '',
                            )
                          : ''
                      }`, // Assuming you have locally saved images with the same name
                }}
                style={productStyles.image}
                onError={error =>
                  console.error('Image loading error:', error.nativeEvent.error)
                }
                onLoad={() => console.log('Image loaded!')}></Image>

              <Text style={productStyles.itemName}>
                {item?.product_name || 'N/A'}
              </Text>

              <Text style={productStyles.itemDetails}>
                Price (Rs.): {item?.unitprice || 'N/A'}.00
              </Text>
              <Text style={productStyles.itemDetails}>
                Available Quantity: {item?.qty || 'N/A'}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={productStyles.noRequests}>No products to show</Text>
      )}
    </SafeAreaView>
  );
};

export default ProductsHome;
