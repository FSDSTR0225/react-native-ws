import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../components/Button";

export default function Pantalla1() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigation = useNavigation();
  const onSubmit = () => {
    console.log("Form submitted with:", {
      name,
      surname,
    });
    // Here you can handle the form submission, e.g., send data to an API
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Pantalla 1</Text>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Formulario</Text>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Escribe algo"
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Escribe algo"
            value={surname}
            onChangeText={setSurname}
          />
          <Button title="Save" onPress={onSubmit} color="blue" />
        </View>
        <Button
          title="Go to Pantalla 2"
          onPress={() => navigation.navigate("Pantalla 2")}
          color="green"
        />
      </View>
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
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    backgroundColor: "yellow",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  counter: {
    flex: 1,
    fontSize: 20,
    color: "green",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
  },
  form: {
    justifyContent: "center",
    gap: 10,
    backgroundColor: "lightgray",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
