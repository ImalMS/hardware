import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash/Splash';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsHome from '../screens/products/Products';
import ItemScreen from '../screens/Items/Items';
import SubCategoryScreen from '../screens/subCategories/SubCategories';
import SizeCategoryScreen from '../screens/sizeCategories/SizeCategories';
import ProductsAccoSizeAndCatScreen from '../screens/allProducts/ProductsAccoSizeAndCat';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductScreen"
          component={ProductsHome}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SubCategoryScreen"
          component={SubCategoryScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SizeCategoryScreen"
          component={SizeCategoryScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductsAccoSizeAndCatScreen"
          component={ProductsAccoSizeAndCatScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
