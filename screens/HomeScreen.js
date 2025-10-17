import React, { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleConfirm = () => {
    if (!pickup.trim() || !destination.trim()) {
      if (Platform.OS === "web") {
        window.alert("❗ Please enter both pickup and destination.");
      } else {
        Alert.alert("Missing Info", "Please enter both pickup and destination.");
      }
      return;
    }

    navigation.navigate("RideOptions", { pickup, destination });
  };

  const handleCurrentLocation = () => {
    if (Platform.OS === "web") {
      window.alert("📍 Using your current location (simulated)");
    } else {
      Alert.alert("📍 Location", "Using your current location (simulated)");
    }
    setPickup("Current Location");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>यात्रा</Text>

      {/* Static map image */}
      <Image
        source={{
          uri: "https://www.google.com/maps/d/thumbnail?mid=1smPKQmc0O8-whCPhITgzP4OMVvo",
        }}
        style={styles.mapImage}
        resizeMode="contain"
      />

      {/* Use Current Location button */}
      <TouchableOpacity
        style={styles.locationButton}
        onPress={handleCurrentLocation}
      >
        <Text style={styles.locationText}>📍 Use Current Location</Text>
      </TouchableOpacity>

      {/* Pickup input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your location..."
        value={pickup}
        onChangeText={setPickup}
      />

      {/* Destination input */}
      <TextInput
        style={styles.input}
        placeholder="Enter destination..."
        value={destination}
        onChangeText={setDestination}
      />

      {/* Confirm button */}
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm Ride</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  logo: {
    fontSize: 36,
    fontWeight: "700",
    color: "#18A558",
    marginBottom: 12,
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
  locationButton: {
    borderWidth: 1.5,
    borderColor: "#18A558",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 22,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    color: "#18A558",
    fontWeight: "600",
    fontSize: 15,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "90%",
    backgroundColor: "#18A558",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});