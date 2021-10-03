import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import Container from "../components/Container";
import { COLORS, FONTS, SIZES } from "../constants";
import Card from "../components/Card";

function mapStateToProps(state) {
  return {
    cst: state.folders,
  };
}

function Folder({ cst, navigation, route }) {
  const { folderName } = route.params;
  const currentFolder = cst.find((f) => f.name === folderName);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#161616",
      }}
    >
      <Container>
        <View style={[styles.header, { marginBottom: SIZES.largeTitle }]}>
          <Pressable
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="chevron-left"
              size={SIZES.largeTitle}
              color={COLORS.white}
            />
            <Text
              style={{
                ...FONTS.p,
                color: COLORS.white,
                marginLeft: SIZES.base,
              }}
            >
              {folderName}
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.margin,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {currentFolder.files.map((s) => {
            return (
              <Card
                key={s.id}
                id={s.id}
                creationTime={s.data.creationTime}
                heading={s.data.heading}
                body={s.data.body}
                ngt={navigation}
              />
            );
          })}
        </View>
      </Container>
    </ScrollView>
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

export default connect(mapStateToProps)(Folder);
