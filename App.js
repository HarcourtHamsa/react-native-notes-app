import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./ctx/store";

import { useLoadedAssets } from "./hooks/useLoadedAssets";

import { Home, New, Edit, NewFolder, Settings, Folder } from "./screens";
import Move from "./screens/Move";

const Stack = createStackNavigator();

function App() {
  const assetsHaveLoaded = useLoadedAssets();

  if (!assetsHaveLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="New" component={New} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Folder" component={Folder} />
            <Stack.Screen name="Move" component={Move} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="NewFolder" component={NewFolder} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
