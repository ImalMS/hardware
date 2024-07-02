import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: MainStyles.COLORS.WHITE,
  },

  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  image: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: 'contain',
  },

  hrmsTxt: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginTop: 10,
    color: MainStyles.COLORS.DARK_BLUE,
    fontStyle: 'italic',
  },

  poweredBy: {
    color: MainStyles.COLORS.DARK_BLUE,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  poweredByView: {
    position: 'absolute',
    bottom: verticalScale(4),
    alignSelf: 'center',
    flexDirection: 'row',
  },

  logo: {
    width: horizontalScale(30),
    height: verticalScale(40),
    marginLeft: horizontalScale(2),
    resizeMode: 'contain',
  },
});

export default splashStyles;
