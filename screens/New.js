import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { addNote } from "../ctx/actions";

import { COLORS, FONTS, SIZES } from "../constants";
import Container from "../components/Container";

function mapDispatchToProps(dispatch) {
  return {
    createNewNote: (note) => dispatch(addNote(note)),
  };
}

function New({ createNewNote, navigation }) {
  const InputRef = React.useRef(null);
  const [cst, fns] = React.useState({
    heading: "",
    body: "",
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

  function handleFormSubmission() {
    createNewNote({
      data: {
        ...cst,
        creationTime: new Date().toLocaleDateString(),
      },
      id: Math.random().toString(16),
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
        <View>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleFormSubmission}
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

export default connect(null, mapDispatchToProps)(New);
