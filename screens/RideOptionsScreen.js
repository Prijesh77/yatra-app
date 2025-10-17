import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RideOptionsScreen({ navigation, route }) {
  const dest = route.params?.destination || "Unknown";
  const [selected, setSelected] = useState("Bike");
  const [loading, setLoading] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const vehicles = [
    {
      name: "Bike",
      price: 100,
      icon: "https://images.vexels.com/media/users/3/152654/isolated/preview/e5694fb12916c00661195c0a833d1ba9-sports-bike-icon-by-vexels.png", // modern green bike icon
    },
    {
      name: "Car",
      price: 150,
      icon: "https://cdn-icons-png.flaticon.com/512/2554/2554936.png", // sleek compact car
    },
    {
      name: "SUV",
      price: 200,
      icon: "https://cdn-icons-png.flaticon.com/512/8177/8177546.png", // premium SUV style
    },
  ];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleConfirm = () => {
    if (!selected) return;
    setLoading(true);

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("RideConfirm", {
        vehicle: selected,
        price: vehicles.find((v) => v.name === selected).price,
      });
    }, 2000);
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Text style={styles.logo}>यात्रा</Text>
      <Text style={styles.header}>Choose Your Ride</Text>
      <Text style={styles.subText}>
        Destination: <Text style={styles.dest}>{dest}</Text>
      </Text>

      <ScrollView contentContainerStyle={styles.vehicleList}>
        {vehicles.map((v) => (
          <TouchableOpacity
            key={v.name}
            style={[
              styles.optionCard,
              selected === v.name && styles.optionSelected,
            ]}
            activeOpacity={0.8}
            onPress={() => setSelected(v.name)}
          >
            <View style={styles.left}>
              <Image source={{ uri: v.icon }} style={styles.icon} />
              <View>
                <Text
                  style={[
                    styles.optionName,
                    selected === v.name && styles.selectedText,
                  ]}
                >
                  {v.name}
                </Text>
                <Text
                  style={[
                    styles.timeText,
                    selected === v.name && styles.selectedText,
                  ]}
                >
                  {v.name === "Bike"
                    ? "10 min away"
                    : v.name === "Car"
                    ? "8 min away"
                    : "6 min away"}
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.optionPrice,
                selected === v.name && styles.selectedText,
              ]}
            >
              Rs {v.price}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[styles.confirm, !selected && { backgroundColor: "#A5D6A7" }]}
        onPress={handleConfirm}
        activeOpacity={0.8}
        disabled={loading}
      >
        <Text style={styles.confirmText}>
          {loading ? "Finding Driver..." : "Confirm Ride"}
        </Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.overlay}>
          <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
              }}
              style={styles.loaderIcon}
            />
          </Animated.View>
          <Text style={styles.loadingText}>Finding your driver...</Text>
          <ActivityIndicator color="#fff" size="large" style={{ marginTop: 10 }} />
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50, paddingHorizontal: 20 },
  logo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#18A558",
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  dest: { fontWeight: "600", color: "#18A558" },
  vehicleList: { paddingBottom: 100 },
  optionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#18A558",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 14,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  optionSelected: { backgroundColor: "#18A558" },
  left: { flexDirection: "row", alignItems: "center" },
  icon: { width: 52, height: 52, marginRight: 14 },
  optionName: { fontSize: 16, fontWeight: "600", color: "#111" },
  timeText: { fontSize: 13, color: "#666" },
  optionPrice: { fontSize: 16, fontWeight: "600", color: "#18A558" },
  selectedText: { color: "#fff" },
  confirm: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#18A558",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
  },
  confirmText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(24, 165, 88, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  loaderIcon: { width: 80, height: 80, tintColor: "#fff" },
  loadingText: { color: "#fff", marginTop: 16, fontSize: 18, fontWeight: "600" },
});
