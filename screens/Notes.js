import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { connect } from "react-redux";

import Card from "../components/Card";
import { COLORS, FONTS, SIZES } from "../constants";

function mapStateToProps(state) {
  return {
    cst: state.notes,
  };
}

function Notes({ cst, navigation }) {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <>
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
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {cst.map((s) => {
            return (
              <Card
                key={s.id}
                id={s.id}
                image={s.data.image}
                creationTime={s.data.creationTime}
                heading={s.data.heading}
                body={s.data.body}
                ngt={navigation}
                toggleOptionsCard={setIsVisible}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    height: 200,
    width: SIZES.width,
    zIndex: 100,
    backgroundColor: COLORS.gray,
    borderTopStartRadius: SIZES.margin,
    borderTopEndRadius: SIZES.margin,
    // position: 'relative'
  },
});

export default connect(mapStateToProps, null)(Notes);
