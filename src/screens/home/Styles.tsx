import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainStyles.COLORS.WHITE,
  },

  gridView: {
    marginTop: 10,
    flex: 1,
  },

  itemContainer: {
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: MainStyles.COLORS.WHITE,
    borderColor: MainStyles.COLORS.DARK_BLUE,
    padding: 10,
    height: 180,
  },

  shadowProp: {
    elevation: 5,
    shadowColor: '#52006A',
  },

  image: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },

  itemName: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: MainStyles.COLORS.DARK_BLUE,
    fontWeight: 'bold',
  },

  imageStyle: {
    width: horizontalScale(120),
    height: verticalScale(120),
    resizeMode: 'contain',
  },

  imageView: {
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: 20,
    width: horizontalScale(120),
    height: verticalScale(120),
    marginBottom: 15,
  },

  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
    color: MainStyles.COLORS.DARK_BLUE,
  },

  noRequests: {
    marginTop: verticalScale(25),
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: MainStyles.COLORS.RED,
  },
});

export default homeStyles;
