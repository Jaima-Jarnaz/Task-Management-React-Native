import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components";
import { colors } from "../../constants/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header onNotificationPress={() => console.log("Notification pressed")} />
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>
          Your profile information will appear here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
