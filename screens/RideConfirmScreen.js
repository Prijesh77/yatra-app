// screens/RideConfirmScreen.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RideConfirmScreen({ route, navigation }) {
  const { vehicle, price } = route.params || {};

  // In a real app you'd pick driver; here we use dummy driver
  const driver = { name: 'Ram Shrestha', rating: 4.7 };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Driver Found</Text>

      <View style={styles.card}>
        <Text style={{fontWeight:'700'}}>{driver.name}</Text>
        <Text style={{marginTop:6}}>Rating: {driver.rating} ⭐</Text>
        <Text style={{marginTop:6}}>Vehicle: {vehicle}</Text>
        <Text style={{marginTop:6}}>Fare: Rs {price}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RideTracking')}>
        <Text style={styles.buttonText}>Share Ride</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor:'#f04'}]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancel Ride</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {marginTop:8, backgroundColor:'#18A558'}]} onPress={() => navigation.navigate('RideTracking', { estimated: '1 minute' })}>
        <Text style={styles.buttonText}>Start Ride</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, paddingTop:40, alignItems:'center'},
  header:{fontSize:22, fontWeight:'700', marginBottom:12},
  card:{width:'90%', padding:16, borderRadius:10, borderWidth:1, borderColor:'#eee', marginBottom:12},
  button:{width:'88%', padding:14, borderRadius:8, alignItems:'center', marginTop:8, backgroundColor:'#666'},
  buttonText:{color:'#fff', fontWeight:'700'}
});
