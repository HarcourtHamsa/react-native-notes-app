import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZES } from "../constants";

function Container({ children }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.transparentBlack} />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    paddingTop: StatusBar.currentHeight / 2,
    paddingHorizontal: SIZES.margin,
  },
});

export default Container;
