// screens/RideOptionsScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import VehicleOption from '../components/VehicleOption';

export default function RideOptionsScreen({ navigation, route }) {
  const dest = route.params?.destination || 'Unknown';
  const [selected, setSelected] = useState('Bike');

  const vehicles = [
    { name: 'Bike', price: 100 },
    { name: 'Car', price: 150 },
    { name: 'SUV', price: 200 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Vehicle</Text>
      <Text style={{marginHorizontal:16, marginBottom:12}}>Destination: {dest}</Text>

      <View style={{paddingHorizontal:16}}>
        {vehicles.map(v => (
          <VehicleOption
            key={v.name}
            name={v.name}
            price={v.price}
            selected={selected === v.name}
            onPress={() => setSelected(v.name)}
          />
        ))}

        <TouchableOpacity style={styles.confirm} onPress={() => navigation.navigate('RideConfirm', { vehicle:selected, price: vehicles.find(v=>v.name===selected).price })}>
          <Text style={styles.confirmText}>Confirm Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:'#fff', paddingTop:40},
  header:{fontSize:22, textAlign:'center', fontWeight:'700', marginBottom:8},
  confirm:{backgroundColor:'#18A558', padding:14, borderRadius:8, marginTop:8, alignItems:'center'},
  confirmText:{color:'#fff', fontWeight:'700'}
});
