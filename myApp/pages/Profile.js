import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Usuario Pepito</Text>
      <Text style={styles.counter}>Email: hola@mail.com</Text>
      <Button
        title="Profile 2"
        onPress={() => navigation.navigate("Profile 2")}
      />
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
