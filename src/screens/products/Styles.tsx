import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const productStyles = StyleSheet.create({
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
    marginBottom: 10,
    backgroundColor: MainStyles.COLORS.WHITE,
    borderColor: MainStyles.COLORS.DARK_BLUE,
    padding: 10,
    height: 260,
  },

  shadowProp: {
    elevation: 5,
    shadowColor: '#52006A',
  },

  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },

  itemName: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17,
    color: MainStyles.COLORS.DARK_BLUE,
    fontWeight: 'bold',
  },

  noRequests: {
    marginTop: verticalScale(25),
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: MainStyles.COLORS.RED,
  },

  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: '40%',
  },

  line: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: MainStyles.COLORS.BLUE,
    textAlign: 'center',
  },

  itemDetails: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    color: MainStyles.COLORS.DARK_BLUE,
  },

  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 100,
    marginTop: 20,
  },

  buttonClose: {
    backgroundColor: MainStyles.COLORS.BLUE,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default productStyles;
