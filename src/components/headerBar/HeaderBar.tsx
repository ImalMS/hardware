import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import headerBarstyle from './Styles';
import {useDispatch, useSelector} from 'react-redux';

interface IProps {
  isMenu: boolean;
  onPress?(): void;
  isHome: boolean;
  onClick?(): void;
  onSync?(): void; // Add onSync prop for the sync action
  page: string;
}

const HeaderBar = ({
  isMenu,
  isHome,
  onPress,
  onClick,
  onSync,
  page,
}: IProps) => {
  const navigation = useNavigation();

  return (
    <View style={headerBarstyle.view1}>
      <View style={headerBarstyle.viewCard}>
        <View style={headerBarstyle.view2}>
          <TouchableOpacity onPress={onPress}>
            {isMenu ? (
              <Image
                source={require('../../assets/images/everest.png')}
                style={headerBarstyle.iconStyle}
              />
            ) : (
              <Icon name="chevron-left" style={headerBarstyle.icon2} />
            )}
          </TouchableOpacity>
          <Text style={headerBarstyle.hrmsTxt}>{page}</Text>
          {isHome && (
            <View style={headerBarstyle.syncView}>
              <TouchableOpacity onPress={onSync}>
                <Icon name="sync" style={headerBarstyle.syncIcon} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
