
import { useState } from "react";
import { View, Text, Pressable } from "react-native";
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Tic Tac Toe
      </Text>

      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        {winner
          ? `Qalib: ${winner}`
          : isDraw
          ? "Heç-heçə!"
          : `Növbə: ${isXTurn ? "X" : "O"}`}
      </Text>

      <View
        style={{
          width: 300,
          height: 300,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>

      <Pressable
        style={{
          backgroundColor: "#333",
          padding: 15,
          borderRadius: 8,
          marginTop: 25,
        }}
        onPress={resetGame}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Yenidən başlat
        </Text>
      </Pressable>
    </View>
  );
}
