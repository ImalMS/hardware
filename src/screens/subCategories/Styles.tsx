import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const subCategoryStyle = StyleSheet.create({
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
    height: 70,
    width: 105,
    marginLeft: 5,
    marginRight: 10,
  },

  shadowProp: {
    elevation: 5,
    shadowColor: '#52006A',
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

  heading: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: MainStyles.COLORS.DARK_BLUE,
    marginBottom: 10,
    marginTop: 10,
  },

  image2: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },

  category: {
    textAlign: 'center',
    fontWeight: '800',
    color: MainStyles.COLORS.DARK_BLUE,
    fontSize: 12,
  },

  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },

  columnHeader: {
    flex: 1,
    textAlign: 'center',
    marginVertical: 8,
    fontWeight: 'bold',
    color: 'black',
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  tableCell1: {
    textAlign: 'left',
    marginVertical: 8,
    color: 'black',
  },

  tableCell: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'black',
  },

  flatListContent: {
    paddingBottom: 16,
  },

  image: {
    width: 250,
    height: 180,
    resizeMode: 'contain',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default subCategoryStyle;
