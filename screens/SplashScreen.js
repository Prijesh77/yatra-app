import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text
} from "react-native";

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Navigate after delay
    const timer = setTimeout(() => navigation.replace("SignIn"), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#18A558", "#0e7a42"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View style={[styles.logoWrap, { opacity: fadeAnim }]}>
        {/* Added logo image */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>यात्रा</Text>
        <Text style={styles.subtitle}>Your Journey Starts Here</Text>
      </Animated.View>

      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoWrap: {
    alignItems: "center",
  },
  logoImage: {
    width: 90,
    height: 90,
    marginBottom: 12,
  },
  title: {
    fontSize: 42,
    fontWeight: "800",
    color: "#fff",
    marginTop: 4,
    letterSpacing: 1,
  },
  subtitle: {
    color: "#e6ffe9",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});
