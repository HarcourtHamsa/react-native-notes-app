import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Container from "../components/Container";
import TopBarNavigator from "../navigation/TopBarNavigator";
import { COLORS, FONTS, SIZES } from "../constants";
import FloatingButton from "../components/FloatingButton";
import CustomBottomSheet from "../components/CustomBottomSheet";

function Home({ navigation }) {
  return (
    <>
      <Container>
        <View style={styles.header}>
          <View style={styles.box}>
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>My Notes</Text>
          </View>
          <View style={styles.box}>
            <Pressable>
              <Icon name="bell-outline" size={SIZES.h1} color={COLORS.white} />
            </Pressable>
            <Pressable
              style={{ marginLeft: SIZES.margin }}
              onPress={() => navigation.navigate("Settings")}
            >
              <Icon name="cog-outline" size={SIZES.h1} color={COLORS.white} />
            </Pressable>
          </View>
        </View>

        <TopBarNavigator />
      </Container>
      <FloatingButton ngt={navigation} />
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
  },
});

export default Home;
