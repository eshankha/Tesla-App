import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    
    carContainer : {
        width: '100%',
        height : Dimensions.get("window").height,
        //backgroundColor : 'red',
       
        },
        titles :{
          marginTop: "25%",
          width: "100%",
         // backgroundColor : 'green',
          alignItems : 'center'
        },
        title :{
          fontSize: 40,
          fontWeight: '600',
        },
        subtitle :{
            fontSize: 15,
            fontWeight: '500',
            color : '#5c5e62'
        },
        taglineCTA: {
          textDecorationLine: 'underline'
        },
        images: {
             width : "100%",
             height : '100%',
            resizeMode : "contain",
             position: "absolute",
        },
        buttoncontainer : {
           position : 'absolute',
           bottom: '10%',
           width: '100%'
        },

})

export default styles;