import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { COLORS, FONTS, SIZES } from "../constants";

function mapStateToProps(state) {
  return {
    cst: state.folders,
  };
}

function FolderCard({ name, ngt }) {
  return (
    <TouchableOpacity
      onPress={() => ngt.navigate("Folder", {folderName: name})}
      style={{
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.base,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          name="folder-outline"
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
          {name}
        </Text>
      </View>
      <Icon name="chevron-right" size={SIZES.largeTitle} color={COLORS.white} />
    </TouchableOpacity>
  );
}

function Folders({ cst, navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#161616",
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.margin,
        }}
      >
        {cst.map((s) => {
          return (
            <FolderCard
              key={Math.random().toString(16)}
              name={s.name}
              ngt={navigation}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

export default connect(mapStateToProps)(Folders);
