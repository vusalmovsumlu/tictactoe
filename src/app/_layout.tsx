import Board from "@/components/Board";
import { View, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});