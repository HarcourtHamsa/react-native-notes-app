import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS, SIZES } from "../constants";

const boxWidth = ["100%", "48%"];

function Card({
  heading,
  creationTime,
  image,
  body,
  ngt,
  id,
  toggleOptionsCard,
}) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => ngt.navigate("Edit", { heading, body, id, creationTime })}
    >
      <View style={{ flex: 3 }}>
        <View style={{ padding: SIZES.base }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: SIZES.margin,
            }}
          >
            <Icon
              name="file-outline"
              size={SIZES.largeTitle - 10}
              color={COLORS.white}
            />
            <Text
              style={{
                ...FONTS.p,
                color: COLORS.white,
                marginLeft: SIZES.base,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {heading}
            </Text>
          </View>
          <Text
            style={{ ...FONTS.p, color: COLORS.white }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {body}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: SIZES.base,
          paddingBottom: 0,
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{creationTime}</Text>
        <Pressable onPress={() => toggleOptionsCard(true)}>
          <Icon
            name="dots-horizontal"
            size={SIZES.largeTitle - 10}
            color={COLORS.white}
          />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: COLORS.transparentBlack,
    width: boxWidth[0],
    height: 150,
    marginBottom: SIZES.base,
    borderRadius: SIZES.radius,
    overflow: "hidden",
  },
});

export default Card;
