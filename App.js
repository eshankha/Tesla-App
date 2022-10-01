import React from "react";

import { Text,View,StyleSheet,ImageBackground,StatusBar } from "react-native";

import CarItem from "./component/CarItem";
import CarList from "./component/CarList";



const Tesla = () => {
    return(

  <View style = {styles.container}>

    <StatusBar style = 'auto'/>

    <CarList/>

   

  </View>


    )
}

const styles = StyleSheet.create({

    container :{
        flex: 1,
        
        backgroundColor: '#fff',
    },
    

})


export default Tesla;