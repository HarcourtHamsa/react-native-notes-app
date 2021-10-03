import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#7047ea",
  secondary: "#212125",
  danger: "#fb1864",
  success: "#0baa6d",
  info: "#185bf8",
  gray: "#212125",
  gray1: "#1f1f1f",
  lightGray: "#3B3B3B",
  lightGray2: '#212125',
  lightGray3: '#757575',
  white: "#ffffff",
  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.8)",
  transparentBlack1: "rgba(0, 0, 0, 0.4)",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Minigame",
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: "Minigame",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: "Aeonik",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: "Aeonik",
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: "Aeonik",
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  h5: {
    fontFamily: "Aeonik",
    fontSize: SIZES.h5,
    lineHeight: 22,
  },
  p: {
    fontFamily: "Aeonik",
    fontSize: 16,
  },
};
