import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function VehicleOption({ name, price, selected, onPress }) {
  const getVehicleImage = () => {
    switch (name) {
      case "Bike":
        return "https://cdn-icons-png.flaticon.com/512/1048/1048313.png";
      case "Car":
        return "https://cdn-icons-png.flaticon.com/512/743/743131.png";
      case "SUV":
        return "https://cdn-icons-png.flaticon.com/512/3097/3097144.png";
      default:
        return "https://cdn-icons-png.flaticon.com/512/854/854878.png";
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Left: Icon + Info */}
      <View style={styles.left}>
        <Image source={{ uri: getVehicleImage() }} style={styles.icon} />
        <View>
          <Text
            style={[styles.name, selected && styles.selectedText]}
          >
            {name}
          </Text>
          <Text
            style={[styles.time, selected && styles.selectedText]}
          >
            {name === "Bike" ? "10 min away" : name === "Car" ? "8 min away" : "6 min away"}
          </Text>
        </View>
      </View>

      {/* Right: Price */}
      <Text style={[styles.price, selected && styles.selectedText]}>
        Rs {price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#18A558",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  cardSelected: {
    backgroundColor: "#18A558",
    borderColor: "#18A558",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  time: {
    fontSize: 13,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#18A558",
  },
  selectedText: {
    color: "#fff",
  },
});
