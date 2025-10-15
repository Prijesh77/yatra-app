// screens/HomeScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [destination, setDestination] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>यात्रा</Text>

      <View style={styles.mapPlaceholder}>
        <Text style={{color:'#666'}}>Map placeholder</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RideOptions', { destination })}>
          <Text style={styles.buttonText}>Current Location</Text>
        </TouchableOpacity>

        <TextInput
          style={[styles.input, {marginTop:12}]}
          placeholder="Destination"
          value={destination}
          onChangeText={setDestination}
        />

        <TouchableOpacity style={[styles.button, {marginTop:12}]} onPress={() => navigation.navigate('RideOptions', { destination })}>
          <Text style={styles.buttonText}>Confirm Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:'#fff'},
  header:{paddingTop:50, paddingBottom:12, fontSize:24, textAlign:'center', fontWeight:'700'},
  mapPlaceholder:{flex:1, margin:16, borderRadius:10, borderWidth:1, borderColor:'#ddd', alignItems:'center', justifyContent:'center'},
  controls:{paddingHorizontal:16, paddingBottom:30},
  input:{height:44, borderWidth:1, borderColor:'#ddd', borderRadius:8, paddingHorizontal:12},
  button:{backgroundColor:'#18A558', padding:12, borderRadius:8, alignItems:'center'},
  buttonText:{color:'#fff', fontWeight:'700'}
});
