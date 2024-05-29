import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: "#f4f5f6",

  contentPrimary:"#738295",

  transparent: "transparent",
  primary: "#21a038", // green
  backgroundPrimary: '#FFFFFF' // 
};

const SIZES = {
  base: 8,
  font: 14,
  radius: 8,
  padding: 8,
  margin: 8,

  // font size
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  
  width,
  height,
};

const FONTS = {
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Black', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Black', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Black', fontSize: SIZES.h4, lineHeight: 20},
  h5: {fontFamily: 'Roboto-Black', fontSize: SIZES.h5, lineHeight: 20},
  h6: {fontFamily: 'Roboto-Black', fontSize: SIZES.h6, lineHeight: 14},
};

const appTheme = {
  COLORS,
  SIZES,
  FONTS,
};

export {
  COLORS,
  FONTS,
  SIZES,
  appTheme
}
