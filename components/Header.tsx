import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";
import { useUser } from "../context/userContext";

interface HeaderProps {
  onNotificationPress?: () => void;
}

export default function Header({ onNotificationPress }: HeaderProps) {
  const { userData, signOut, isLoading } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Get user initials from email or use default
  const getUserInitials = () => {
    if (userData?.email) {
      return userData.email.charAt(0).toUpperCase();
    }
    return "G";
  };

  // Get display name from context or fallback to email
  const getDisplayName = () => {
    if (userData?.name) {
      return userData.name;
    } else {
      return "Guest";
    }
  };

  if (isLoading) {
    return (
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.profilePicture}>
            <Text style={styles.profileInitial}>...</Text>
          </View>
          <View style={styles.userText}>
            <Text style={styles.greeting}>Loading...</Text>
            <Text style={styles.userName}>Please wait</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <View style={styles.profilePicture}>
          <Text style={styles.profileInitial}>{getUserInitials()}</Text>
        </View>
        <View style={styles.userText}>
          <Text style={styles.greeting}>Hello! {getDisplayName()}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.notificationIcon}
          onPress={onNotificationPress}
        >
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    fontFamily: "NotoSans-Bold",
  },
  userText: {
    flexDirection: "column",
  },
  greeting: {
    fontSize: 16,
    color: "#666",
    fontFamily: "NotoSans-Regular",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "NotoSans-Bold",
  },
  userEmail: {
    fontSize: 12,
    color: "#666",
    fontFamily: "NotoSans-Regular",
    marginTop: 2,
  },
  userDate: {
    fontSize: 10,
    color: "#999",
    fontFamily: "NotoSans-Regular",
    marginTop: 1,
  },
  notificationIcon: {
    padding: 8,
  },
  bellIcon: {
    fontSize: 24,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  signOutButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 12,
  },
  signOutText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "NotoSans-SemiBold",
  },
});
