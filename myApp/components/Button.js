import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, title, color = "green" }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.wrapper, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
