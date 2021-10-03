import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS, FONTS, SIZES } from "../constants";
import Folders from "../screens/Folders";
import Notes from "../screens/Notes";

const Tab = createMaterialTopTabNavigator();

function TopBarNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginTop: SIZES.margin,
          backgroundColor: "#161616",
          elevation: 0,
        },
        tabBarActiveTintColor: COLORS.white,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.white
        },
        tabBarLabelStyle: {
          ...FONTS.p,
        },
      }}
    >
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Folders" component={Folders} />
    </Tab.Navigator>
  );
}

export default TopBarNavigator;
