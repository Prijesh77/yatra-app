// screens/SplashScreen.js
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('SignIn'), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Text style={styles.pin}>📍</Text>
        <Text style={styles.title}>यात्रा</Text>
      </View>
      <Text style={styles.subtitle}>Your Journey Starts Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:'#18A558', alignItems:'center', justifyContent:'center'},
  logoWrap: {alignItems:'center'},
  pin: {fontSize:64, color:'#fff'},
  title: {fontSize:40, fontWeight:'700', color:'#fff', marginTop:8},
  subtitle: {color:'#e6ffe9', marginTop:16}
});
