import React from "react";
import {View ,Text,ImageBackground,StyleSheet} from 'react-native'
import styles from "./style";
import StyleButton from "../StyleButton";

const CarItem = (props) =>{

const {name,tagline,image,taglineCTA} = props.car;
    return(
        <View style = {styles.carContainer}>


        <ImageBackground 
            source={image}
            style = {styles.images}
            />
    
    
            <View style = {styles.titles}>
                <Text style = {styles.title}>{name}</Text>
                <Text style = {styles.subtitle}>{tagline} {''}
                <Text style = {styles.taglineCTA}>{taglineCTA}</Text>  
                </Text> 
                 {/* making text inside text */}
            </View>



            <View style = {styles.buttoncontainer}>
                
            <StyleButton 
            type = 'primary'
            content = 'Custom Order'
            onPress = {() => {
                console.warn("Custom Order Was Pressed")
            }}
            />
               <Text></Text>
               
           <StyleButton 
            type = 'secondary'
            content = 'Existing Inventory'
            onPress = {() => {
                console.warn("Existing Inventoey Was Pressed")
            }}
            />
            </View>

           
            
    
        </View>
    )
}
  


export default CarItem;