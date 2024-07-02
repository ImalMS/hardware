import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const modalDetailsStyles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },

  coloumn3: {
    flexDirection: 'column',
    width: '50%',
  },

  coloumn4: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '50%',
    paddingRight: horizontalScale(15),
  },

  detailsTxt1: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: MainStyles.COLORS.BLUE,
  },

  detailsTxt2: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: MainStyles.COLORS.GREY,
  },
});

export default modalDetailsStyles;
