// screens/PaymentScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PaymentScreen({ navigation }) {
  const [method, setMethod] = useState('Cash');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment</Text>

      <View style={styles.methods}>
        <TouchableOpacity style={[styles.method, method==='Cash' && styles.sel]} onPress={() => setMethod('Cash')}>
          <Text>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.method, method==='Fonepay' && styles.sel]} onPress={() => setMethod('Fonepay')}>
          <Text>Fonepay</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.finish} onPress={() => navigation.navigate('RateRide')}>
        <Text style={{color:'#fff', fontWeight:'700'}}>Finish Ride</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, paddingTop:60, alignItems:'center'},
  header:{fontSize:20, fontWeight:'700', marginBottom:20},
  methods:{flexDirection:'row', gap:12},
  method:{padding:14, borderRadius:8, borderWidth:1, borderColor:'#ddd', marginBottom:20, width:120, alignItems:'center'},
  sel:{borderColor:'#18A558', backgroundColor:'#f1fff3'},
  finish:{backgroundColor:'#18A558', padding:12, borderRadius:8, width:'80%', alignItems:'center'}
});
