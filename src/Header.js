import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {

  render() {
    return(
      <View style = {styles.header}>
        <Text style={{ fontWeight: 'bold', color: 'white'}}>Welcome Back</Text>
        <Text style={{ fontStyle: 'italic', color: 'white'}}>Jeanne</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header : {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111'
  }
});