import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, title, color }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
