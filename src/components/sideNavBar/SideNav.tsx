import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Avatar, Drawer, Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconM from 'react-native-vector-icons/MaterialIcons';
import MainStyles from '../../constant/MainStyles';
import drawerStyles from './Styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';
import Spinner from '../spinner/Spinner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions} from '@react-navigation/native';

const CustomDraverContent = () => {
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);
  const [spinnerMessage, setSpinnerMessage] = useState('');

  const logout = async () => {
    setShowSpinner(true);
    setSpinnerMessage('Loading....');
    setShowSpinner(false);
    navigation.dispatch(DrawerActions.closeDrawer());
    // navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={drawerStyles.view1}>
          <View style={drawerStyles.view2}>
            <View style={drawerStyles.proPicView}>
              <Image
                style={drawerStyles.avatar}
                source={require('../../assets/images/ecoHome.png')}
              />
              <View style={drawerStyles.proDetails}>
                <Title style={drawerStyles.title}>Eco Technologies</Title>
              </View>
            </View>
            <Spinner visible={showSpinner} message={spinnerMessage} />
            <Drawer.Section style={drawerStyles.drawerSection}>
              <DrawerItem
                style={drawerStyles.drawerItem}
                icon={({color, size}) => (
                  <IconM
                    name={'logout'}
                    size={30}
                    color={MainStyles.COLORS.BLUE}
                  />
                )}
                label="Log Out"
                labelStyle={{
                  color: MainStyles.COLORS.BLACK,
                  fontSize: moderateScale(11),
                  fontWeight: '600',
                }}
                onPress={logout}
              />
            </Drawer.Section>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDraverContent;
