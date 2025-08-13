import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";

export default function HomeScreen() {
  const handleGetStarted = () => {
    router.push("/signup");
  };

  const handleLogin = () => {
    router.push("/signin");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/landing.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Task Management</Text>
          <Text style={styles.description}>
            This productive tool is designed to help you better manage your task
            project-wise conveniently!
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleGetStarted}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <Image
              source={require("../assets/icons/arrow-right.png")}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
            <Text style={styles.loginText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "NotoSans-Regular",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "NotoSans-Bold",
  },
  description: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 40,
    paddingHorizontal: 20,
    fontFamily: "NotoSans-Regular",
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: "100%",
    display: "flex",
    alignItems: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "medium",
    color: colors.white,
    fontFamily: "NotoSans-Medium",
  },
  arrow: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 20,
    top: "40%",
  },
  loginContainer: {
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  loginText: {
    fontSize: 20,
    color: colors.primary,
    fontFamily: "NotoSans-Medium",
    fontWeight: "500",
  },
});
