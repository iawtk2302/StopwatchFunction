import React from "react";
import { View,StyleSheet,Text } from "react-native";
import formatTime from 'minutes-seconds-milliseconds'
const Lab1=({time,id})=>{
    return(
        <View style={{alignItems:'center',marginTop:8}}>
            <View style={{...styles.container,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:8,fontSize:18}}>Lab #{id}</Text>
                <Text style={{marginRight:8,fontSize:18}}>{formatTime(time)}</Text>
            </View>
        </View>
    );
};
const styles= StyleSheet.create({
    container:{
        height:70,
        width:'80%',
        alignContent:'center',
        borderColor:'black',
        borderWidth:1
    }
})

export default Lab1;