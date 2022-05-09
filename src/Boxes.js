import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Boxes extends React.Component {

  render() {
    return(
      <View style = {styles.container}>

<Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>MY CARD                                                                 Manage</Text>

        <View style={styles.boxx}>
            <View style={styles.inner}>
                <Text style={{fontSize: 50, fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Balance                  Rs. 1432.00</Text>
            </View>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold' , color: 'white'}}>Eligible Limit : Rs. 28,000.72</Text>
        </View>


        <View style={styles.box}>
            <View style={styles.inners}>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Deposit Crypto</Text>
            </View>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold' , color: 'white'}}>...to add limit</Text>
        </View>

        <View style={styles.box}>
            <View style={styles.inners}>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Use XCoins</Text>
            </View>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold' , color: 'white'}}>...for cashback</Text>
        </View>

        <View style={styles.box}>
            <View style={styles.inners}>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Pay your due</Text>
            </View>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold' , color: 'white'}}>...release crypto</Text>
        </View>

        <View style={styles.box}>
            <View style={styles.inners}>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Withdraw Crypto</Text>
            </View>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold' , color: 'white'}}>...remove limit</Text>
        </View>

        <View style={styles.boxx}>
            <View style={styles.inner}>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Deposit your cryptos to get instant credit limit on the card. Start using your card to earn XCoins @5% cashback rate (offer could change in the future)</Text>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inners}>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Deposit Now</Text>
            </View>
        </View>

        <View style={styles.boxxx}>
            <View style={styles.innerss}>
                <Text style={{fontStyle: 'italic', color: 'black'}}>My Portfolio</Text>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'black'}}>Rs. 4,001.46</Text>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'green'}}>^ 4.32%</Text>
            </View>
        </View>

        <View style={styles.boxxx}>
            <View style={styles.innerss}>
                <Text style={{fontStyle: 'italic', color: 'black'}}>My Rewards</Text>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'black'}}>0,016xCoin</Text>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'green'}}>Rs. 210.06</Text>
            </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    width: '100%',
    height: '85%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
      width: '25%',
      height: '10%',
      padding: 5
  },

  boxx: {
    width: '100%',
    height: '25%',
    padding: 5
    },

   boxxx: {
        width: '100%',
        height: '15%',
        padding: 5
        },
  inner: {
      flex: 1,
      backgroundColor: '#5f5f5f',
      alignItems: 'center',
      justifyContent: 'center'
  },

  inners: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
},

innerss: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
}
});