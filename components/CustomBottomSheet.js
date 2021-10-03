import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { COLORS, SIZES } from "../constants";

const CustomBottomSheet = ({ isVsisble }) => {
  return (
    <View style={styles.container(isVsisble)}>
      <Modal style={styles.overlay} transparent={true}></Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (isVisble) => ({
    flex: 1,
  }),
  overlay: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default CustomBottomSheet;
