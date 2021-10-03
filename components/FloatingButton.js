import React from "react";
import { View, Pressable, StyleSheet, Text, Modal } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES, FONTS } from "../constants";

function FloatingButton({ ngt }) {
  const [isVisible, setIsVisible] = React.useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <View style={styles.bottom}>
        <View style={styles.buttonGroup}>
          <Pressable style={[styles.button]} onPress={() => toggleVisibility()}>
            <Icon
              name={isVisible ? "close" : "plus"}
              size={SIZES.largeTitle}
              color={COLORS.white}
            />
          </Pressable>
        </View>
      </View>
      <Modal transparent={true} visible={isVisible} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.transparentBlack,
            justifyContent: "flex-end",
            paddingBottom: SIZES.margin,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={styles.textIconBtn}
              onPress={() => ngt.navigate("New")}
            >
              <Icon name={"file-outline"} size={SIZES.h1} color={COLORS.white} />
              <Text style={{ ...FONTS.p, color: COLORS.white }}>New Note</Text>
            </Pressable>
            <Pressable
              style={styles.textIconBtn}
              onPress={() => ngt.navigate("NewFolder")}
            >
              <Icon name={"folder-outline"} size={SIZES.h1} color={COLORS.white} />
              <Text style={{ ...FONTS.p, color: COLORS.white }}>
                New Folder
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => setIsVisible(false)}
            >
              <Icon
                name={"close"}
                size={SIZES.largeTitle}
                color={COLORS.white}
              />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    bottom: SIZES.margin,
    justifyContent: "center",
    alignItems: "center",
    width: SIZES.width,
  },
  buttonGroup: {
    flex: 1,
  },
  button: {
    width: SIZES.largeTitle + 30,
    height: SIZES.largeTitle + 30,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.base,
    zIndex: 100,
  },
  textIconBtn: {
    backgroundColor: COLORS.transparentWhite,
    height: 50,
    width: SIZES.width / 2,
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.base,
    marginHorizontal: SIZES.margin,
    borderRadius: SIZES.radius - 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 10,
  },
});

export default FloatingButton;
