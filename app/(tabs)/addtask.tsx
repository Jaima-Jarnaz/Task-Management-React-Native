import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/colors";

export default function AddTaskScreen() {
  const [taskGroup, setTaskGroup] = useState("Work");
  const [projectName, setProjectName] = useState("Grocery Shopping App");
  const [description, setDescription] = useState(
    "This application is designed for super shops. By using this application they can enlist all their products in one place and can deliver. Customers will get a one-stop solution for their daily shopping."
  );
  const [startDate, setStartDate] = useState("01 May, 2022");
  const [endDate, setEndDate] = useState("30 June, 2022");

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    console.log("Saving task:", {
      taskGroup,
      projectName,
      description,
      startDate,
      endDate,
    });
    // Add your save logic here
    router.back();
  };

  const handleChangeLogo = () => {
    console.log("Change logo pressed");
    // Add your logo change logic here
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Project</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.bellIcon}>🔔</Text>
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Task Group Section */}
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Task Group</Text>
          <View style={styles.taskGroupRow}>
            <View style={styles.taskGroupIcon}>
              <Text style={styles.shoppingBagIcon}>🛍️</Text>
            </View>
            <Text style={styles.taskGroupText}>{taskGroup}</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
        </View>

        {/* Project Name Section */}
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Task Name</Text>
          <TextInput
            style={styles.projectNameInput}
            value={projectName}
            onChangeText={setProjectName}
            placeholder="Enter Task name"
            placeholderTextColor="#999"
          />
        </View>

        {/* Description Section */}
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            placeholder="Enter project description"
            placeholderTextColor="#999"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>

        {/* Start Date Section */}
        <View style={styles.inputCard}>
          <View style={styles.dateRow}>
            <Text style={styles.calendarIcon}>📅</Text>
            <View style={styles.dateContent}>
              <Text style={styles.inputLabel}>Start Date</Text>
              <Text style={styles.dateText}>{startDate}</Text>
            </View>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
        </View>

        {/* End Date Section */}
        <View style={styles.inputCard}>
          <View style={styles.dateRow}>
            <Text style={styles.calendarIcon}>📅</Text>
            <View style={styles.dateContent}>
              <Text style={styles.inputLabel}>End Date</Text>
              <Text style={styles.dateText}>{endDate}</Text>
            </View>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
        </View>

        {/* Project Logo Section */}
        <View style={styles.inputCard}>
          <View style={styles.logoSection}>
            <View style={styles.logoContainer}>
              <View style={styles.logoPlaceholder}>
                <Text style={styles.logoText}>
                  <Text style={styles.logoTextGreen}>Grocery</Text>
                  <Text style={styles.logoTextOrange}>shop</Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.changeLogoButton}
              onPress={handleChangeLogo}
            >
              <Text style={styles.changeLogoText}>Change Logo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Project</Text>
        </TouchableOpacity>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "NotoSans-Bold",
  },
  notificationButton: {
    padding: 8,
    position: "relative",
  },
  bellIcon: {
    fontSize: 24,
  },
  notificationBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B5CF6",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputLabel: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 12,
    fontFamily: "NotoSans-Regular",
  },
  taskGroupRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskGroupIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#FCE7F3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  shoppingBagIcon: {
    fontSize: 20,
  },
  taskGroupText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "NotoSans-Bold",
  },
  dropdownIcon: {
    fontSize: 12,
    color: "#000",
    marginLeft: 8,
  },
  projectNameInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "NotoSans-Bold",
    padding: 0,
  },
  descriptionInput: {
    fontSize: 16,
    color: "#000",
    fontFamily: "NotoSans-Regular",
    padding: 0,
    lineHeight: 24,
    minHeight: 120,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  dateContent: {
    flex: 1,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "NotoSans-Bold",
  },
  logoSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    flex: 1,
    marginRight: 20,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#F59E0B",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "NotoSans-Bold",
  },
  logoTextGreen: {
    color: "#10B981",
  },
  logoTextOrange: {
    color: "#F59E0B",
  },
  changeLogoButton: {
    backgroundColor: "#E0E7FF",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  changeLogoText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    fontFamily: "NotoSans-Medium",
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "NotoSans-Medium",
  },
  bottomSpacing: {
    height: 40,
  },
});
