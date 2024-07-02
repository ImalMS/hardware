import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

  const getScaleNumber = (size: number) => {
    // return the dpi
    const dimesion = Math.min(height, width);
    const dpi = Math.round(dimesion / 375);
    if (dpi >= 2) {
      return (size * dpi) / 4 + size;
    }
    return size;
  };

export {horizontalScale, verticalScale, moderateScale, getScaleNumber};
