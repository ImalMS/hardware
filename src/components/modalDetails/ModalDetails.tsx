import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import modalDetailsStyles from './Styles';

const ModalDetails = ({text1, text2}: any) => {
  return (
    <View style={modalDetailsStyles.row1}>
      <View style={modalDetailsStyles.coloumn3}>
        <Text style={modalDetailsStyles.detailsTxt1}>{text1}</Text>
      </View>

      <View style={modalDetailsStyles.coloumn4}>
        <Text style={modalDetailsStyles.detailsTxt2}>{text2}</Text>
      </View>
    </View>
  );
};

export default ModalDetails;
