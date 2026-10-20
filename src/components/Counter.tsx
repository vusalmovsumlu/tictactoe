import { use, useState } from "react"
import {Button, Text, View } from "react-native";


export default function Counter() {
    const [counter,setCounter]=useState<number>(0);

  return (
    <View>
        <Text>Counter : {counter}</Text>

        <Button title="Increase" onPress={()=> setCounter(counter+1)}></Button>
    </View>
    
  )
}
