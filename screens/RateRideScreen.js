// screens/RateRideScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RateRideScreen({ navigation }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  function submit() {
    // In real app send to backend
    navigation.popToTop();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rate Your Ride</Text>

      <View style={styles.stars}>
        {[1,2,3,4,5].map(i => (
          <TouchableOpacity key={i} onPress={() => setRating(i)}>
            <Text style={{fontSize:30, marginHorizontal:6}}>{i <= rating ? '★' : '☆'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Leave a comment"
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={{color:'#fff', fontWeight:'700'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, paddingTop:60, alignItems:'center'},
  header:{fontSize:20, fontWeight:'700', marginBottom:20},
  stars:{flexDirection:'row', marginBottom:20},
  input:{width:'86%', height:100, borderWidth:1, borderColor:'#ddd', borderRadius:8, padding:12, textAlignVertical:'top', marginBottom:12},
  button:{backgroundColor:'#18A558', padding:12, borderRadius:8, width:'86%', alignItems:'center'}
});
