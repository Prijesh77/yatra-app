import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RideTrackingScreen({ navigation, route }) {
  const estimated = route.params?.estimated || "5 mins";
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const thankYouOpacity = useRef(new Animated.Value(0)).current;
  const thankYouScale = useRef(new Animated.Value(0.8)).current;
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFinishRide = () => {
    // Step 1: Fade out current view
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      // Step 2: Show thank-you screen
      setShowThankYou(true);

      Animated.parallel([
        Animated.timing(thankYouOpacity, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.spring(thankYouScale, {
          toValue: 1,
          friction: 4,
          tension: 50,
          useNativeDriver: true,
        }),
      ]).start();

      // Step 3: Navigate to RateRide after delay
      setTimeout(() => {
        navigation.navigate("RateRide");
      }, 2200);
    });
  };

  if (showThankYou) {
    return (
      <Animated.View
        style={[
          styles.thankYouContainer,
          {
            opacity: thankYouOpacity,
            transform: [{ scale: thankYouScale }],
          },
        ]}
      >
        <Ionicons name="checkmark-circle" size={80} color="#18A558" />
        <Text style={styles.thankYouText}>Thank You!</Text>
        <Text style={styles.subText}>We hope you enjoyed your Yatra 🚗</Text>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* App Header */}
      <Text style={styles.logo}>यात्रा</Text>
      <Text style={styles.header}>Ride in Progress </Text>

      {/* Square Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={{
            uri: "https://www.google.com/maps/d/u/0/thumbnail?mid=1smPKQmc0O8-whCPhITgzP4OMVvo",
          }}
          style={styles.mapImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Ionicons name="navigate-outline" size={20} color="#fff" />
          <Text style={styles.overlayText}>Driver in route</Text>
        </View>
      </View>

      {/* ETA and Actions */}
      <View style={styles.infoCard}>
        <Text style={styles.etaText}>⏱️ {estimated} to Destination</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.paymentButton]}
            onPress={() => navigation.navigate("Payment")}
          >
            <Ionicons name="card-outline" size={18} color="#fff" />
            <Text style={styles.actionText}>Payment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.finishButton]}
            onPress={handleFinishRide}
          >
            <Ionicons name="checkmark-done-outline" size={18} color="#fff" />
            <Text style={styles.actionText}>Finish Ride</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#18A558",
    marginBottom: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 14,
  },
  mapContainer: {
    width: 250,
    height: 250,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#eaeaea",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24,
  },
  mapImage: {
    width: 260,             // ✅ fixed width for consistency
    height: 260,            // ✅ square for mobile/web alignment
    borderRadius: 16,
    marginBottom: 15,
    backgroundColor: "#e6e6e6",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  overlayText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
    fontSize: 13,
  },
  infoCard: {
    width: "90%",
    padding: 18,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    alignItems: "center",
  },
  etaText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 12,
    flex: 1,
    marginHorizontal: 6,
  },
  paymentButton: {
    backgroundColor: "#1976D2",
  },
  finishButton: {
    backgroundColor: "#18A558",
  },
  actionText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 6,
  },
  // Thank You Screen Styles
  thankYouContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  thankYouText: {
    fontSize: 32,
    fontWeight: "800",
    color: "#18A558",
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    color: "#555",
    marginTop: 8,
  },
});
