import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pantalla1 from "./pages/Pantalla1";
import Pantalla2 from "./pages/Pantalla2";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen name="Pantalla 1" component={Pantalla1} />
        <Stack.Screen name="Pantalla 2" component={Pantalla2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
