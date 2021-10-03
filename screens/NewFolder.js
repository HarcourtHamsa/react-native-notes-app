import React from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Container from "../components/Container";
import { COLORS, SIZES, FONTS } from "../constants";
import { connect } from "react-redux";
import { addFolder } from "../ctx/actions";

function mapDispatchToProps(dispatch) {
  return {
    createFolder: (folder) => dispatch(addFolder(folder)),
  };
}

function NewFolder({ navigation, createFolder }) {
  const [cst, fns] = React.useState({
    folderName: "",
  });

  function handleFolderNameChange(e) {
    fns((s) => ({
      ...s,
      folderName: e,
    }));
  }

  function handleSubmission() {
    createFolder({ name: cst.folderName, files: [] });
    // set folder name to default
    fns((s) => ({
      ...s,
      folderName: "",
    }));
    navigation.push("Home");
  }

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <View style={[styles.header, { marginBottom: SIZES.largeTitle }]}>
          <Pressable
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={() => navigation.push("Home")}
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
              Create Folder
            </Text>
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              ...FONTS.p,
              color: COLORS.white,
              marginLeft: SIZES.base,
            }}
          >
            Enter a name for the folder
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.white}
            autoFocus={true}
            value={cst.folderName}
            onChangeText={handleFolderNameChange}
          />
          <View style={styles.header}>
            <View
              style={[styles.btn, { backgroundColor: COLORS.transparentWhite }]}
            >
              <Text style={{ ...FONTS.p, color: COLORS.white }}>Cancel</Text>
            </View>
            <Pressable style={styles.btn} onPress={() => handleSubmission()}>
              <Text style={{ ...FONTS.p, color: COLORS.white }}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Container>
    </View>
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
  input: {
    backgroundColor: COLORS.transparentBlack,
    height: 55,
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.padding,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.transparentWhite,
    color: COLORS.white,
    ...FONTS.p,
  },
  btn: {
    marginTop: SIZES.padding,
    backgroundColor: COLORS.success,
    borderRadius: SIZES.base,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
  },
});

export default connect(null, mapDispatchToProps)(NewFolder);
