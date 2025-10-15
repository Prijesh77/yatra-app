// components/VehicleOption.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VehicleOption({ name, price, selected, onPress }) {
  return (
    <TouchableOpacity style={[styles.wrap, selected && styles.selected]} onPress={onPress}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rs {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap:{flexDirection:'row', justifyContent:'space-between', padding:14, borderWidth:1, borderColor:'#eee', borderRadius:10, marginBottom:12},
  selected:{borderColor:'#18A558', backgroundColor:'#f1fff3'},
  name:{fontWeight:'700'},
  price:{color:'#666', marginTop:4}
});
