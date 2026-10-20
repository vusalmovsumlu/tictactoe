
import { Pressable, Text, StyleSheet } from "react-native";

type SquareProps = {
  value: "X" | "O" | null;
  onPress: () => void;
};

export default function Square({ value, onPress }: SquareProps) {
  return (
    <Pressable style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
