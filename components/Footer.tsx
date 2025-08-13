import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";

interface FooterProps {
  activeTab?: "home" | "calendar" | "add" | "document" | "users";
  onTabPress?: (tab: string) => void;
  onAddPress?: () => void;
}

export default function Footer({
  activeTab = "home",
  onTabPress,
  onAddPress,
}: FooterProps) {
  const handleTabPress = (tab: string) => {
    if (onTabPress) {
      onTabPress(tab);
    }
  };

  const handleAddPress = () => {
    if (onAddPress) {
      onAddPress();
    } else {
      // Default navigation to addtask page
      router.push("/addtask");
    }
  };

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity
        style={[styles.navItem, activeTab === "home" && styles.navItemActive]}
        onPress={() => handleTabPress("home")}
      >
        <Text style={styles.navIcon}>🏠</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navItem,
          activeTab === "calendar" && styles.navItemActive,
        ]}
        onPress={() => handleTabPress("calendar")}
      >
        <Text style={styles.navIcon}>📅</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, styles.addButton]}
        onPress={handleAddPress}
      >
        <Text style={styles.addIcon}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navItem,
          activeTab === "document" && styles.navItemActive,
        ]}
        onPress={() => handleTabPress("document")}
      >
        <Text style={styles.navIcon}>📄</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, activeTab === "users" && styles.navItemActive]}
        onPress={() => handleTabPress("users")}
      >
        <Text style={styles.navIcon}>👤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 10000,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  navItemActive: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  navIcon: {
    fontSize: 26,
  },
  addButton: {
    backgroundColor: colors.white,
    borderRadius: 30,
    width: 60,
    height: 60,
    marginTop: -100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  addIcon: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold",
    fontFamily: "NotoSans-Bold",
  },
});
