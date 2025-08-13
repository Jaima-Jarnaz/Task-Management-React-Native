import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";
import { dateData, filterOptions, taskData } from "../constants/constants";

export default function TodaysTasksScreen() {
  const [selectedDate, setSelectedDate] = useState(2); // May 25 is selected by default
  const [activeFilter, setActiveFilter] = useState("all");
  const [tasks, setTasks] = useState(taskData);

  const handleBack = () => {
    router.back();
  };

  const handleDateSelect = (index: number) => {
    setSelectedDate(index);
  };

  const handleFilterSelect = (filterId: string) => {
    setActiveFilter(filterId);
    // You can add filtering logic here
  };

  const handleAddNew = () => {
    router.push("/addtask");
  };

  const handleTabPress = (tab: string) => {
    console.log("Tab pressed:", tab);
    // Add your tab navigation logic here
  };

  const renderTaskItem = ({ item }: { item: any }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskHeader}>
        <Text style={styles.taskCategory}>{item.category}</Text>
        <View style={styles.taskRight}>
          <View
            style={[styles.taskIcon, { backgroundColor: item.iconBgColor }]}
          >
            <Text style={styles.taskIconText}>{item.icon}</Text>
          </View>
          <View
            style={[styles.taskStatus, { backgroundColor: item.statusColor }]}
          >
            <Text style={[styles.taskStatusText, { color: item.textColor }]}>
              {item.status}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.taskName}>{item.taskName}</Text>
      <View style={styles.taskTime}>
        <Text style={styles.clockIcon}>🕐</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Date Selection */}
        <View style={styles.dateSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dateData.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateCard,
                  index === selectedDate && styles.dateCardSelected,
                ]}
                onPress={() => handleDateSelect(index)}
              >
                <Text
                  style={[
                    styles.dateMonth,
                    index === selectedDate && styles.dateTextSelected,
                  ]}
                >
                  {date.month}
                </Text>
                <Text
                  style={[
                    styles.dateDay,
                    index === selectedDate && styles.dateTextSelected,
                  ]}
                >
                  {date.day}
                </Text>
                <Text
                  style={[
                    styles.dateWeekday,
                    index === selectedDate && styles.dateTextSelected,
                  ]}
                >
                  {date.weekday}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Filter Buttons */}
        <View style={styles.filterSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filterOptions.map((filter) => (
              <TouchableOpacity
                key={filter.id}
                style={[
                  styles.filterButton,
                  filter.id === activeFilter && styles.filterButtonActive,
                ]}
                onPress={() => handleFilterSelect(filter.id)}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    filter.id === activeFilter && styles.filterButtonTextActive,
                  ]}
                >
                  {filter.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Task List */}
        <View style={styles.taskSection}>
          <FlatList
            data={tasks}
            renderItem={renderTaskItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
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
  },
  bellIcon: {
    fontSize: 24,
  },
  scrollView: {
    flex: 1,
  },
  dateSection: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  dateCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: "center",
    minWidth: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateCardSelected: {
    backgroundColor: colors.primary,
  },
  dateMonth: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 4,
    fontFamily: "NotoSans-Regular",
  },
  dateDay: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
    fontFamily: "NotoSans-Bold",
  },
  dateWeekday: {
    fontSize: 12,
    color: "#64748b",
    fontFamily: "NotoSans-Regular",
  },
  dateTextSelected: {
    color: colors.white,
  },
  filterSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  filterButton: {
    backgroundColor: "#E0E7FF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 12,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8B5CF6",
    fontFamily: "NotoSans-Medium",
  },
  filterButtonTextActive: {
    color: colors.white,
  },
  taskSection: {
    paddingHorizontal: 20,
  },
  taskCard: {
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
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  taskCategory: {
    fontSize: 14,
    color: "#64748b",
    flex: 1,
    marginRight: 12,
    fontFamily: "NotoSans-Regular",
  },
  taskRight: {
    alignItems: "flex-end",
  },
  taskIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  taskIconText: {
    fontSize: 16,
  },
  taskStatus: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  taskStatusText: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "NotoSans-Medium",
  },
  taskName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
    fontFamily: "NotoSans-Bold",
  },
  taskTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  timeText: {
    fontSize: 14,
    color: "#8B5CF6",
    fontFamily: "NotoSans-Regular",
  },
  fab: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "bold",
    fontFamily: "NotoSans-Bold",
  },
  bottomSpacing: {
    height: 100,
  },
});
