import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RateRideScreen({ navigation }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  function submit() {
    if (Platform.OS === "web") {
      window.alert(`✅ Thank you! You rated ${rating} stars.`);
    } else {
      Alert.alert("Thank You!", `You rated ${rating} stars.`);
    }
    navigation.popToTop();
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>यात्रा</Text>

      {/* Header */}
      <Text style={styles.header}>Rate Your Ride</Text>
      <Text style={styles.subText}>
        Your feedback helps us improve our service.
      </Text>

      {/* Star Rating */}
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <TouchableOpacity key={i} onPress={() => setRating(i)}>
            <Ionicons
              name={i <= rating ? "star" : "star-outline"}
              size={36}
              color={i <= rating ? "#FFD700" : "#ccc"}
              style={styles.starIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Comment box */}
      <TextInput
        style={styles.input}
        placeholder="Share your experience..."
        value={comment}
        onChangeText={setComment}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitWrapper} onPress={submit}>
        <LinearGradient
          colors={["#18A558", "#18A558"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.submitButton}
        >
          <Ionicons name="send-outline" size={20} color="#fff" />
          <Text style={styles.submitText}>Submit Feedback</Text>
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
    paddingTop: Platform.OS === "web" ? 60 : 80,
  },
  logo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#18A558",
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },
  subText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  starIcon: {
    marginHorizontal: 6,
  },
  input: {
    width: "85%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    textAlignVertical: "top",
    fontSize: 14,
    backgroundColor: "#f9f9f9",
    marginBottom: 25,
  },
  submitWrapper: {
    width: "85%",
    borderRadius: 10,
    overflow: "hidden",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },
  submitText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8,
  },
});
