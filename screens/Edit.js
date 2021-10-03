import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { updateNote, deleteNote } from "../ctx/actions";

import { COLORS, FONTS, SIZES } from "../constants";
import Container from "../components/Container";

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentNote: (note) => dispatch(updateNote(note)),
    deleteCurrentNote: (note) => dispatch(deleteNote(note)),
  };
}

function Edit({ route, updateCurrentNote, navigation, deleteCurrentNote }) {
  const InputRef = React.useRef(null);

  const [cst, fns] = React.useState({
    heading: route.params.heading,
    body: route.params.body,
  });

  React.useEffect(() => {
    InputRef.current.focus();
  }, []);

  function handleHeadingChange(e) {
    fns((s) => ({
      ...s,
      heading: e,
    }));
  }

  function handleBodyChange(e) {
    fns((s) => ({
      ...s,
      body: e,
    }));
  }

  function deleteNote() {
    Alert.alert("Notification", "Are you sure you want to delete this note?", [
      {
        text: "Yes",
        onPress: () => {
          deleteCurrentNote({
            data: {
              ...cst,
              creationTime: route.params.creationTime,
            },
            id: route.params.id,
          });
          navigation.push("Home");
        },
      },
      {
        text: "No",
      },
    ]);
  }

  function handleFormSubmission() {
    updateCurrentNote({
      data: {
        ...cst,
        creationTime: route.params.creationTime,
      },
      id: route.params.id,
    });
    navigation.push("Home");
  }

  return (
    <Container>
      <View style={styles.header}>
        <Pressable
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("Home")}
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
            Back
          </Text>
        </Pressable>
        <View style={styles.header}>
          <Pressable
            style={{
              paddingHorizontal: SIZES.base,
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={() => deleteNote()}
          >
            <Icon name="delete-outline" size={SIZES.h1} color={COLORS.white} />
          </Pressable>
          <Pressable
            style={{
              paddingHorizontal: SIZES.base,
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={() => handleFormSubmission()}
          >
            <Icon name="check" size={SIZES.h1} color={COLORS.white} />
          </Pressable>
        </View>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.heading}
          autoFocus={true}
          returnKeyType="next"
          ref={InputRef}
          value={cst.heading}
          onChangeText={handleHeadingChange}
        />
        <TextInput
          style={styles.body}
          autoFocus={true}
          value={cst.body}
          enablesReturnKeyAutomatically={true}
          multiline={true}
          onChangeText={handleBodyChange}
        />
      </View>
    </Container>
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
  main: {
    flex: 1,
    width: SIZES.width,
    paddingHorizontal: SIZES.base,
  },
  heading: {
    paddingTop: SIZES.margin,
    ...FONTS.h1,
    color: COLORS.white,
  },
  body: {
    ...FONTS.p,
    color: COLORS.white,
    maxWidth: 300,
    lineHeight: 20,
  },
});

export default connect(null, mapDispatchToProps)(Edit);
