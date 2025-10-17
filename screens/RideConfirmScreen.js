import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RideConfirmScreen({ route, navigation }) {
  const { vehicle, price } = route.params || {};
  const driver = {
    name: "Ram Shrestha",
    rating: 4.7,
    image: "https://cdn-icons-png.flaticon.com/512/146/146007.png",
    vehicleNumber: "BA 2 PA 4567",
  };

  const [loading, setLoading] = useState(false);
  const carAnim = useRef(new Animated.Value(-200)).current; // car starts off-screen

  const handleStartRide = () => {
    setLoading(true);

    // Animate car movement left → right
    Animated.timing(carAnim, {
      toValue: 250,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setLoading(false);
      Alert.alert("✅ Ride Started", "Enjoy your ride with " + driver.name);
      navigation.navigate("RideTracking", { estimated: "1 minute" });
    }, 2200);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.logo}>यात्रा</Text>
      <Text style={styles.header}>Driver Found 🚗</Text>

      {/* Driver Info Card */}
      <View style={styles.card}>
        <Image source={{ uri: driver.image }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.driverName}>{driver.name}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{driver.rating}</Text>
          </View>
          <Text style={styles.vehicleText}>
            Vehicle: <Text style={styles.vehicleHighlight}>{vehicle}</Text>
          </Text>
          <Text style={styles.vehicleNumber}>{driver.vehicleNumber}</Text>
          <Text style={styles.priceText}>Fare: Rs {price}</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={[styles.button, styles.shareButton]}
        onPress={() => Alert.alert("Shared", "Ride details shared successfully!")}
      >
        <Ionicons name="share-social-outline" size={18} color="#fff" />
        <Text style={styles.buttonText}>Share Ride</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close-circle-outline" size={18} color="#fff" />
        <Text style={styles.buttonText}>Cancel Ride</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.startButton]}
        onPress={handleStartRide}
        disabled={loading}
      >
        <Ionicons name="car-outline" size={18} color="#fff" />
        <Text style={styles.buttonText}>
          {loading ? "Starting..." : "Start Ride"}
        </Text>
      </TouchableOpacity>

      {/* Loading Animation Overlay */}
      {loading && (
        <View style={styles.overlay}>
          <Text style={styles.loadingText}>Starting your ride...</Text>
          <Animated.Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
            }}
            style={[
              styles.carIcon,
              { transform: [{ translateX: carAnim }] },
            ]}
          />
          <ActivityIndicator size="large" color="#fff" style={{ marginTop: 40 }} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#18A558",
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    marginBottom: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 14,
  },
  driverName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  vehicleText: {
    marginTop: 6,
    color: "#444",
  },
  vehicleHighlight: {
    color: "#18A558",
    fontWeight: "600",
  },
  vehicleNumber: {
    marginTop: 2,
    color: "#888",
    fontSize: 13,
  },
  priceText: {
    marginTop: 8,
    fontWeight: "600",
    color: "#333",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  shareButton: {
    backgroundColor: "#2196F3",
  },
  cancelButton: {
    backgroundColor: "#E53935",
  },
  startButton: {
    backgroundColor: "#18A558",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 6,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(24,165,88,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  carIcon: {
    width: 100,
    height: 100,
    tintColor: "#fff",
  },
});
