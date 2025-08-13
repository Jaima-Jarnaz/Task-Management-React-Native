import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../constants/colors";
import { authMessages } from "../constants/constants";
import { useUser } from "../context/userContext";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, isLoading } = useUser();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", authMessages.emailRequired);
      return;
    }

    try {
      await signIn(email, password);
      // Navigation will be handled automatically by _layout.tsx
      // based on the authentication state
    } catch (error: any) {
      console.error("Sign in error:", error);

      let errorMessage = authMessages.generalSignInError;
      console.log("Sign in error:", error, errorMessage);
      if (error.code === "auth/user-not-found") {
        errorMessage = authMessages.userNotFound;
      } else if (error.code === "auth/wrong-password") {
        errorMessage = authMessages.wrongPassword;
      } else if (error.code === "auth/invalid-email") {
        errorMessage = authMessages.invalidEmailAddress;
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = authMessages.tooManyRequests;
      }
    }
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{authMessages.welcomeBack}</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>{authMessages.emailAddress}</Text>
              <TextInput
                style={styles.input}
                placeholder={authMessages.emailPlaceholder}
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!isLoading}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>{authMessages.password}</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder={authMessages.passwordPlaceholder}
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  editable={!isLoading}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <Text style={styles.eyeIconText}>
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.signInButton,
                isLoading && styles.signInButtonDisabled,
              ]}
              onPress={handleSignIn}
              disabled={isLoading}
            >
              <Text style={styles.signInButtonText}>
                {isLoading ? authMessages.loading : authMessages.signIn}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signUpLink}
              onPress={handleSignUp}
              disabled={isLoading}
            >
              <Text style={styles.signUpText}>
                {authMessages.dontHaveAccount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "NotoSans-Bold",
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    fontFamily: "NotoSans-Medium",
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    fontFamily: "NotoSans-Regular",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    fontFamily: "NotoSans-Regular",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -10 }],
    padding: 4,
  },
  eyeIconText: {
    fontSize: 20,
  },
  signInButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
    pointerEvents: "auto",
  },
  signInButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "NotoSans-Medium",
  },
  signUpLink: {
    alignItems: "center",
  },
  signUpText: {
    color: "#666",
    fontSize: 16,
    fontFamily: "NotoSans-Regular",
  },
  signInButtonDisabled: {
    backgroundColor: "#ccc",
    opacity: 0.7,
  },
});
