import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { auth } from "../config/firebaseConfig";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.message);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Back to Sign In" onPress={() => navigation.navigate("SignIn")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 }
});
