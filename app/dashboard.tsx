import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../components";
import { colors } from "../constants/colors";

export default function DashboardScreen() {
  const handleViewTask = () => {
    console.log("View Task pressed");
    router.push("/todaystasks");
  };

  const handleAddNew = () => {
    console.log("Add new pressed");
    // Add your add new logic here
  };

  const handleTabPress = (tab: string) => {
    console.log("Tab pressed:", tab);
    // Add your tab navigation logic here
  };

  return (
    <View style={styles.container}>
      <Header onNotificationPress={() => console.log("Notification pressed")} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressCardLeft}>
            <Text style={styles.progressCardTitle}>
              Your today&apos;s task almost done!
            </Text>
            <TouchableOpacity
              style={styles.viewTaskButton}
              onPress={handleViewTask}
            >
              <Text style={styles.viewTaskButtonText}>View Task</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressCardRight}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressText}>85%</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.moreOptions}>
            <Text style={styles.moreOptionsText}>⋯</Text>
          </TouchableOpacity>
        </View>

        {/* In Progress Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>In Progress</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>6</Text>
            </View>
          </View>

          <View style={styles.inProgressCards}>
            <View style={[styles.taskCard, styles.officeProjectCard]}>
              <View style={styles.taskCardHeader}>
                <Text style={styles.taskCardTitle}>Office Project</Text>
                <Text style={styles.briefcaseIcon}>💼</Text>
              </View>
              <Text style={styles.taskCardSubtitle}>
                Grocery shopping app design
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, styles.blueProgress]} />
              </View>
            </View>

            <View style={[styles.taskCard, styles.personalProjectCard]}>
              <View style={styles.taskCardHeader}>
                <Text style={styles.taskCardTitle}>Personal Project</Text>
                <Text style={styles.userIcon}>👤</Text>
              </View>
              <Text style={styles.taskCardSubtitle}>
                Uber Eats redesign challenge
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, styles.orangeProgress]} />
              </View>
            </View>
          </View>
        </View>

        {/* Task Groups Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Task Groups</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>4</Text>
            </View>
          </View>

          <View style={styles.taskGroups}>
            <View style={styles.taskGroupItem}>
              <View style={styles.taskGroupLeft}>
                <View style={[styles.taskGroupIcon, styles.pinkIcon]}>
                  <Text style={styles.briefcaseIcon}>💼</Text>
                </View>
                <View style={styles.taskGroupText}>
                  <Text style={styles.taskGroupTitle}>Office Project</Text>
                  <Text style={styles.taskGroupCount}>23 Tasks</Text>
                </View>
              </View>
              <View style={[styles.taskGroupProgress, styles.pinkProgress]}>
                <Text style={styles.taskGroupProgressText}>70%</Text>
              </View>
            </View>

            <View style={styles.taskGroupItem}>
              <View style={styles.taskGroupLeft}>
                <View style={[styles.taskGroupIcon, styles.purpleIcon]}>
                  <Text style={styles.userIcon}>👤</Text>
                </View>
                <View style={styles.taskGroupText}>
                  <Text style={styles.taskGroupTitle}>Personal Project</Text>
                  <Text style={styles.taskGroupCount}>30 Tasks</Text>
                </View>
              </View>
              <View style={[styles.taskGroupProgress, styles.purpleProgress]}>
                <Text style={styles.taskGroupProgressText}>52%</Text>
              </View>
            </View>

            <View style={styles.taskGroupItem}>
              <View style={styles.taskGroupLeft}>
                <View style={[styles.taskGroupIcon, styles.orangeIcon]}>
                  <Text style={styles.bookIcon}>📚</Text>
                </View>
                <View style={styles.taskGroupText}>
                  <Text style={styles.taskGroupTitle}>Daily Study</Text>
                  <Text style={styles.taskGroupCount}>30 Tasks</Text>
                </View>
              </View>
              <View
                style={[styles.taskGroupProgress, { borderColor: "#F59E0B" }]}
              >
                <Text style={styles.taskGroupProgressText}>87%</Text>
              </View>
            </View>

            <View style={styles.taskGroupItem}>
              <View style={styles.taskGroupLeft}>
                <View style={[styles.taskGroupIcon, styles.blueIcon]}>
                  <Text style={styles.calendarIcon}>📅</Text>
                </View>
                <View style={styles.taskGroupText}>
                  <Text style={styles.taskGroupTitle}>Weekly Goals</Text>
                  <Text style={styles.taskGroupCount}>15 Tasks</Text>
                </View>
              </View>
              <View
                style={[styles.taskGroupProgress, { borderColor: "#3B82F6" }]}
              >
                <Text style={styles.taskGroupProgressText}>45%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom spacing for navigation */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  progressCard: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 20,
    flexDirection: "row",
    position: "relative",
  },
  progressCardLeft: {
    flex: 1,
    justifyContent: "center",
  },
  progressCardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 15,
    fontFamily: "NotoSans-Medium",
  },
  viewTaskButton: {
    backgroundColor: "#A78BFA",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
  },
  viewTaskButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "NotoSans-Medium",
  },
  progressCardRight: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#A78BFA",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    fontFamily: "NotoSans-Bold",
  },
  moreOptions: {
    position: "absolute",
    top: 15,
    right: 15,
    padding: 5,
  },
  moreOptionsText: {
    fontSize: 20,
    color: colors.white,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
    fontFamily: "NotoSans-Bold",
  },
  countBadge: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 24,
    alignItems: "center",
  },
  countText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "NotoSans-Medium",
  },
  inProgressCards: {
    flexDirection: "row",
    gap: 15,
  },
  taskCard: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
  },
  officeProjectCard: {
    backgroundColor: "#E0F2FE",
  },
  personalProjectCard: {
    backgroundColor: "#FEF3C7",
  },
  taskCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  taskCardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    fontFamily: "NotoSans-Medium",
  },
  briefcaseIcon: {
    fontSize: 16,
  },
  userIcon: {
    fontSize: 16,
  },
  taskCardSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 15,
    fontFamily: "NotoSans-Regular",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
  blueProgress: {
    backgroundColor: "#3B82F6",
    width: "70%",
  },
  orangeProgress: {
    backgroundColor: "#F59E0B",
    width: "45%",
  },
  taskGroups: {
    gap: 15,
  },
  taskGroupItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
  },
  taskGroupLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  taskGroupIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  pinkIcon: {
    backgroundColor: "#FCE7F3",
  },
  purpleIcon: {
    backgroundColor: "#F3E8FF",
  },
  orangeIcon: {
    backgroundColor: "#FEF3C7",
  },
  blueIcon: {
    backgroundColor: "#E0F2FE",
  },
  taskGroupText: {
    flex: 1,
  },
  taskGroupTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    fontFamily: "NotoSans-Medium",
  },
  taskGroupCount: {
    fontSize: 14,
    color: "#666",
    fontFamily: "NotoSans-Regular",
  },
  taskGroupProgress: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
  },
  pinkProgress: {
    borderColor: "#EC4899",
  },
  purpleProgress: {
    borderColor: "#8B5CF6",
  },
  taskGroupProgressText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    fontFamily: "NotoSans-Medium",
  },
  bookIcon: {
    fontSize: 16,
  },
  calendarIcon: {
    fontSize: 16,
  },
  bottomSpacing: {
    height: 100,
  },
});
