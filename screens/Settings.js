import React from "react";
import { View, Text, StyleSheet, Pressable, Switch } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Container from "../components/Container";
import TopBarNavigator from "../navigation/TopBarNavigator";
import { COLORS, FONTS, SIZES } from "../constants";
import FloatingButton from "../components/FloatingButton";

function Settings({ navigation }) {
  return (
    <>
      <Container>
        <View style={[styles.header, {marginBottom: SIZES.largeTitle}]}>
          <View style={styles.box}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginRight: SIZES.base,}}
            >
              <Icon name="chevron-left" size={SIZES.h1} color={COLORS.white} />
            </Pressable>
            <Text style={{ ...FONTS.p, color: COLORS.white }}>Settings</Text>
          </View>
        </View>

        <View style={{ marginTop: SIZES.margin }}>
          <Text
            style={{
              ...FONTS.p,
              textTransform: "uppercase",
              color: COLORS.info,
            }}
          >
            Account Info
          </Text>
          <View style={{ marginVertical: SIZES.base }}>
            <Text
              style={{
                ...FONTS.p,
                color: COLORS.white,
              }}
            >
              Email Address
            </Text>
            <Text
              style={{
                ...FONTS.p,
                color: COLORS.white,
              }}
            >
              hamsaharcourt@gmail.com
            </Text>
          </View>
          <View style={{ marginVertical: SIZES.base }}>
            <Text
              style={{
                ...FONTS.p,
                color: COLORS.white,
              }}
            >
              Password
            </Text>
            <Text
              style={{
                ...FONTS.p,
                color: COLORS.white,
              }}
            >
              *********
            </Text>
          </View>
        </View>
        <View style={{ marginTop: SIZES.margin }}>
          <Text
            style={{
              ...FONTS.p,
              textTransform: "uppercase",
              color: COLORS.info,
            }}
          >
            Security
          </Text>
          <View
            style={[
              styles.box,
              { marginVertical: SIZES.base, justifyContent: "space-between" },
            ]}
          >
            <Text
              style={{
                ...FONTS.p,
                color: COLORS.white,
              }}
            >
              Lock Screen
            </Text>
            <Switch thumbColor={COLORS.info} />
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    flexDirection: "row",
    alignItems: 'center'
  },
});

export default Settings;
