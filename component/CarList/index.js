import React from "react";

import { View,Text,FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import cars from "./cars";
import styles2 from "./styles2";


const CarList = () => {
    return(
        <View style = {styles2.container}>

       <FlatList
       data={cars}
       renderItem ={({item}) => <CarItem car = {item} /> }
       snapToAlignment = {'start'}
       decelerationRate = {"normal"}
       snapToInterval = {Dimensions.get("window").height}
       showsVerticalScrollIndicator = {false}
       />
            
        </View>
    )
}

export default CarList;