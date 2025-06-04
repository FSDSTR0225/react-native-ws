import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet } from "react-native";
import Man from "./assets/man.png";
import Pantalla1 from "./pages/Pantalla1";
import Profile from "./pages/Profile";
import Profile2 from "./pages/Profile2";

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Profile 2" component={Profile2} />
    </Stack.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarActiveTintColor: "orange",
        }}
      >
        <Tab.Screen name="Pantalla 1" component={Pantalla1} />
        <Tab.Screen
          name="User Data"
          component={ProfileStack}
          options={{
            tabBarIcon: () => <Image source={Man} style={styles.manicon} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  manicon: {
    width: 10,
    height: 10,
  },
});
