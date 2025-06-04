import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";

export default function Profile2() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Fecha nacimiento: 20/02/1980</Text>
      <Text style={styles.counter}>Peso: 100KG</Text>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    backgroundColor: "yellow",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
