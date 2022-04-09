
import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList, 
  TouchableHighlight
} from 'react-native';
import Lab1 from './components/Lab';

import formatTime from 'minutes-seconds-milliseconds';

const App = () => {
  const [startTime,setStartTime]=useState();
  const [timeElapsed,setTimeElapsed]=useState();
  const [running,setRunning]=useState(false);
  const [lab,setLab]=useState([]);
  const [id,setId]=useState(0);
  useEffect(()=>{
    let interval=null;
    if(running){
      interval=setInterval(()=>{
        setTimeElapsed(new Date()-startTime)
      },10)
    }
    else{
      clearInterval(interval)
      return;
    }
    return ()=>clearInterval(interval)
  },[running,timeElapsed])

  const handleStartPress=()=>{
      setStartTime(new Date());
      if(running)
      { 
        setRunning(false);
        return;
      }  
      else{
        setRunning(true);
        return;
      }
  }

  const handleLabPress=()=>{
      setLab([...lab,{id:id+1,time:timeElapsed}]);
      setStartTime(new Date());
      setId(id+1);
      console.log(lab);
  }
  
  
  const renderItem = ({ item }) => (
    <Lab1 time={item.time} id={item.id}/>
  );

  return (
    <SafeAreaView>
      <View style={styles.time}>
        <Text style={{fontSize:80,color:'black'}}>{formatTime(timeElapsed)}</Text>
      </View>   
      <View style={{flexDirection:'row',justifyContent:"space-around"}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" style={styles.btn} onPress={()=>handleLabPress()}>
          <Text style={{fontSize:18,color:'black'}}>Lab</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>handleStartPress()}>
          <Text style={{fontSize:18,color:'black'}}>Start/Stop</Text>
        </TouchableHighlight>
      </View> 
      <FlatList
        data={lab}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    time:{
      marginTop:80,
      alignItems:'center'
    },
    btn:{
      height:120,
      width:120,
      borderRadius:60,
      backgroundColor:"gray",
      alignItems:'center',
      justifyContent:'center'
    }
});



export default App;
