
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Square from "./Square";

type Cell = "X" | "O" | null;

export default function Board() {
  const [squares, setSquares] = useState<Cell[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function getWinner(): Cell {
    for (const [a, b, c] of winningLines) {
      if (
        squares[a] !== null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  const winner = getWinner();
  const isDraw = !winner && squares.every((square) => square !== null);

  function handlePress(index: number) {
    if (squares[index] !== null || winner) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";

    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>

      <Text style={styles.status}>
        {winner
          ? `Qalib: ${winner}`
          : isDraw
          ? "Heç-heçə!"
          : `Növbə: ${isXTurn ? "X" : "O"}`}
      </Text>

      <View style={styles.board}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>

      <Pressable style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Yenidən başlat</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
  },
  board: {
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 8,
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

