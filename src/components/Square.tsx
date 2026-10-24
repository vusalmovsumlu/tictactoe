
import { Pressable, Text } from "react-native";

type SquareProps = {
  value: "X" | "O" | null;
  onPress: () => void;
};

export default function Square({ value, onPress }: SquareProps) {
  return (
    <Pressable
      style={{
        width: 100,
        height: 100,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {value}
      </Text>
    </Pressable>
  );
}
