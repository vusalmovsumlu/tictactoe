import { useEffect, useState } from "react";
import { FlatList, View,Text } from "react-native";

const url="https://fakestoreapi.com/products"

interface Product{
    id:string,
    title:string,
    price:number
}

const getProducts=async():Promise<Product[]>=>{
    const res=await fetch(url);
    return res.json();
}
export default function ItemLisy(){
    const [prods,setProds]=useState<Product[]>([]);
    useEffect(()=>{
        getProducts()
        .then((data)=>setProds(data));
    },[]);

    return(
        <FlatList
        data={prods}
        renderItem={({item})=>(
            <View style={{margin:10,paddingTop:4,backgroundColor:"lightblue"}}>

                <Text>
                    {item.id}-{item.title}
                </Text>
                <Text>
                    Price : {item.price}
                </Text>
            </View>
        )}
        keyExtractor={(item)=> item.id}
    />

        
    )
}