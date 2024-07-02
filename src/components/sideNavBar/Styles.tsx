import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const drawerStyles = StyleSheet.create({
  view1: {
    flex: 1,
    marginBottom: 15,
  },

  view2: {
    flex: 1,
    padding: 0,
    margin: 0,
  },

  proImage: {
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  proPicView: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },

  proDetails: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: moderateScale(14),
    marginTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: MainStyles.COLORS.DARK_GREEN,
  },

  avatar: {
    backgroundColor: MainStyles.COLORS.WHITE,
    borderWidth: 2,
    borderColor: MainStyles.COLORS.DARK_GREEN,
    resizeMode: 'contain',
    height: 130,
    width: 130,
    alignItems: 'center',
    borderRadius: 130 / 2,
  },

  versionView: {
    position: 'absolute',
    width: '100%',
    bottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    fontSize: moderateScale(12),
    color: MainStyles.COLORS.BLUE,
  },

  drawerItem: {
    paddingLeft: 0,
    marginBottom: 3,
  },

  drawerSection: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: MainStyles.COLORS.WHITE,
  },

  logoutView: {
    backgroundColor: MainStyles.COLORS.DARK_BLUE,
    width: '90%',
    padding: 5,
    borderRadius: 5,
  },

  logout: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  logoutText: {
    fontSize: moderateScale(16),
    fontWeight: '800',
    alignSelf: 'center',
    paddingLeft: 10,
    color: MainStyles.COLORS.WHITE,
  },
});

export default drawerStyles;
