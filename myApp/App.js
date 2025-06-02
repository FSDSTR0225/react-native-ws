import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "./components/Button";

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const onSubmit = () => {
    console.log("Form submitted with:", {
      name,
      surname,
    });
    // Here you can handle the form submission, e.g., send data to an API
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Formulario</Text>
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
      <View style={styles.form}>
        <Text style={styles.title}>Formulario</Text>
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
      <View style={styles.form}>
        <Text style={styles.title}>Formulario</Text>
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
      <View style={styles.form}>
        <Text style={styles.title}>Formulario</Text>
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
      <View style={styles.form}>
        <Text style={styles.title}>Formulario</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
