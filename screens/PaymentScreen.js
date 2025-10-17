import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function PaymentScreen({ navigation }) {
  const [method, setMethod] = useState("Cash");

  const paymentMethods = [
    { name: "Cash", icon: "cash-outline" },
    { name: "Fonepay", icon: "phone-portrait-outline" },
    { name: "eSewa", icon: "wallet-outline" },
  ];

  return (
    <View style={styles.container}>
      {/* App logo */}
      <Text style={styles.logo}>यात्रा</Text>

      {/* Header */}
      <Text style={styles.header}>Complete Your Payment</Text>

      {/* Payment options */}
      <View style={styles.methods}>
        {paymentMethods.map((m) => (
          <TouchableOpacity
            key={m.name}
            style={[
              styles.methodCard,
              method === m.name && styles.methodSelected,
            ]}
            onPress={() => setMethod(m.name)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={m.icon}
              size={26}
              color={method === m.name ? "#fff" : "#18A558"}
            />
            <Text
              style={[
                styles.methodText,
                method === m.name && { color: "#fff" },
              ]}
            >
              {m.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Payment summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Payment Method</Text>
        <Text style={styles.summaryValue}>{method}</Text>

        <Text style={[styles.summaryLabel, { marginTop: 8 }]}>Total Fare</Text>
        <Text style={styles.summaryValue}>Rs 150</Text>
      </View>

      {/* Finish Ride Button */}
      <TouchableOpacity
        style={styles.finishWrapper}
        onPress={() => navigation.navigate("RateRide")}
      >
        <LinearGradient
          colors={["#18A558", "#18A558"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.finishButton}
        >
          <Ionicons name="checkmark-done-outline" size={20} color="#fff" />
          <Text style={styles.finishText}>Finish Ride</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "web" ? 50 : 70,
  },
  logo: {
    fontSize: 30,
    fontWeight: "700",
    color: "#18A558",
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  methods: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  methodCard: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#18A558",
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    width: 100,
  },
  methodSelected: {
    backgroundColor: "#18A558",
    borderColor: "#18A558",
  },
  methodText: {
    marginTop: 6,
    fontWeight: "600",
    color: "#18A558",
  },
  summaryCard: {
    width: "85%",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 40,
  },
  summaryLabel: {
    color: "#777",
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  finishWrapper: {
    width: "85%",
    borderRadius: 10,
    overflow: "hidden",
  },
  finishButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },
  finishText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
});
