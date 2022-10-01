import React from "react";
import {View,Text, Pressable} from 'react-native'
import Styles1 from "./style";


const StyleButton = (props) => {

  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;


 // const {type , content , onPress} = props;     same meaning of above 

  const backgroundColor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type == 'primary' ? '#FFFFFF' : '#171A20' ;
    return(
        <View style = {Styles1.container}>
         <Pressable
        onPress={() => {
            onPress()
        
        }} 

        style = {[Styles1.button , {backgroundColor : backgroundColor}]}
         
         >


         <Text style = {[Styles1.text , {color : textColor}]}>{content}</Text>
         

         </Pressable>
        </View>

    )
}

export default StyleButton;