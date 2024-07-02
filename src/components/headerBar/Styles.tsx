import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const headerBarstyle = StyleSheet.create({
  view1: {
    overflow: 'hidden',
    paddingBottom: 5,
    marginBottom: 10,
    backgroundColor: MainStyles.COLORS.DARK_BLUE,
  },

  viewCard: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  syncView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 12,
    marginRight: 5,
  },

  syncIcon: {
    fontSize: 16, // Adjust the size as needed
    color: 'white', // Adjust the color as needed
    marginRight: 10,
  },

  icon2: {
    color: MainStyles.COLORS.WHITE,
    fontSize: 15,
    marginTop: 14,
    paddingHorizontal: 15,
  },

  view2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  hrmsTxt: {
    marginTop: 10,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: MainStyles.COLORS.WHITE,
    fontStyle: 'italic',
  },

  iconStyle: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
    height: 22,
    width: 22,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  cartContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Adjust alignment as needed
  },
  cartIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'pink', // Background color
    borderRadius: 10, // Adjust the radius as needed
    padding: 3, // Add padding as needed
    fontSize: 12, // Font size
    color: 'white', // Text color
  },
});

export default headerBarstyle;
