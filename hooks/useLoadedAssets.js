import React from "react";
import * as Font from "expo-font";

export function useLoadedAssets() {
  const [assetsIsLoaded, setAssetsIsLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadAssets() {
      try {
        // Load fonts
        await Font.loadAsync({
          Minigame: require("../assets/fonts/Minigame.ttf"),
          Acumin: require("../assets/fonts/Acumin-BdPro.otf"),
          Aeonik: require("../assets/fonts/Poppins-Light.ttf"),
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAssetsIsLoaded(true);
      }
    }

    loadAssets();
  }, []);

  return assetsIsLoaded;
}
