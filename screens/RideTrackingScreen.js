// screens/RideTrackingScreen.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RideTrackingScreen({ navigation, route }) {
  const estimated = route.params?.estimated || '5 mins';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride in progress</Text>

      <View style={styles.mapPlaceholder}>
        <Text style={{color:'#666'}}>Map & driver location placeholder</Text>
      </View>

      <View style={styles.info}>
        <Text style={{fontWeight:'700'}}>1 Minutes to Destination</Text>

        <View style={{flexDirection:'row', marginTop:12, justifyContent:'space-around', width:'100%'}}>
          <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate('Payment')}>
            <Text style={{color:'#fff'}}>Payment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.payBtn, {backgroundColor:'#18A558'}]} onPress={() => navigation.navigate('RateRide')}>
            <Text style={{color:'#fff'}}>Finish Ride</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, paddingTop:40, alignItems:'center'},
  header:{fontSize:20, fontWeight:'700', marginBottom:12},
  mapPlaceholder:{flex:1, alignSelf:'stretch', marginHorizontal:16, borderRadius:8, borderWidth:1, borderColor:'#eee', justifyContent:'center', alignItems:'center'},
  info:{width:'100%', padding:16},
  payBtn:{backgroundColor:'#666', padding:12, borderRadius:8, alignItems:'center', minWidth:110}
});
