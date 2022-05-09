/*
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[{ color: "white" }]}>Helllo!</Text>
      <StatusBar style="auto" />

    <Text style={[{ color: "white" }]}>Ionicons Icons</Text>
    <Ionicons name='md-keypad' style={[{ color: "white", height: 10, width: 10 }]} value={{size:70}}/>

    <Text style={[{ color: "white" }]}>FontAwesome Icons</Text>
    <FontAwesome name='trophy' style={[{ color: "white" }]}/>

    <Text style={[{ color: "white" }]}>Entypo Icons</Text>
    <Entypo name='drive' style={[{ color: "white" }]}/>
    </View>

    
  );
}

const featuresData = [
  
]


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import Boxes from './src/Boxes';


export default class App extends React.Component {

  render() {
    return(
      <View style = {styles.container}>
        <Header />
        <Boxes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#3f3f3f',
  }
});