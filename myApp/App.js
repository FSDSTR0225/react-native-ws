import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Open up App.js to start working on your app!
      </Text>
      <Button
        title="Press me"
        onPress={() => setCount(count + 1)}
        color="blue"
      />
      <Text style={styles.counter}>Contador {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
    fontSize: 20,
    color: "green",
    marginTop: 20,
  },
});
