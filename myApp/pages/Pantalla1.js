import * as Device from "expo-device";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {Device.manufacturer}: {Device.modelName}: {Device.osName}{" "}
        {Device.osVersion} {Device.osBuildId}
      </Text>
    </View>
  );
}
