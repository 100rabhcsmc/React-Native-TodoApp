import {Dimensions, Platform, PixelRatio, useColorScheme} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function Normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function BackgroundColor() {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? '#000' : '#fff';
}

export function Color() {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? '#fff' : '#000';
}
