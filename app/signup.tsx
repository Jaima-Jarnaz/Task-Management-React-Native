import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
import { auth, db } from "../config/firebase-config";
import { colors } from "../constants/colors";
import { authMessages } from "../constants/constants";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    // Name validation
    if (!name.trim()) {
      newErrors.name = authMessages.nameRequired;
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = authMessages.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = authMessages.invalidEmail;
    }

    // Password validation
    if (!password) {
      newErrors.password = authMessages.passwordRequired;
    } else if (password.length < 6) {
      newErrors.password = authMessages.passwordTooShort;
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created successfully:", userCredential.user.uid);

      // Save user data to Firestore
      try {
        const userData = {
          uid: userCredential.user.uid,
          name: name.trim(),
          email: email.trim(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        await setDoc(doc(db, "users", userCredential.user.uid), userData);
        console.log("User data saved to Firestore successfully");
        if (authMessages.signupSuccess) {
          router.push("/dashboard");
        }
      } catch (firestoreError: any) {
        console.error("Error saving user data:", firestoreError);
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      let errorMessage = authMessages.signupError;

      // Handle specific Firebase errors
      if (error.code === "auth/email-already-in-use") {
        errorMessage = authMessages.emailAlreadyInUse;
      } else if (error.code === "auth/invalid-email") {
        errorMessage = authMessages.invalidEmailFormat;
      } else if (error.code === "auth/weak-password") {
        errorMessage = authMessages.weakPassword;
      } else if (error.code === "auth/operation-not-allowed") {
        errorMessage = authMessages.operationNotAllowed;
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = authMessages.networkError;
      }

      if (errorMessage) {
        Alert.alert("Error", errorMessage, [
          {
            text: "OK",
            onPress: () => setLoading(false),
          },
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = () => {
    router.push("/signin");
  };

  const clearError = (field: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Create Account</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[styles.input, errors.name ? styles.inputError : null]}
                placeholder="Your name"
                placeholderTextColor="#999"
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  clearError("name");
                }}
                autoCapitalize="words"
                editable={!loading}
              />
              {errors.name ? (
                <Text style={styles.errorText}>{errors.name}</Text>
              ) : null}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                style={[styles.input, errors.email ? styles.inputError : null]}
                placeholder="name@example.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  clearError("email");
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loading}
              />
              {errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[
                    styles.passwordInput,
                    errors.password ? styles.inputError : null,
                  ]}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    clearError("password");
                  }}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  editable={!loading}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  <Text style={styles.eyeIconText}>
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </Text>
                </TouchableOpacity>
              </View>
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            <TouchableOpacity
              style={[
                styles.signUpButton,
                loading ? styles.signUpButtonDisabled : null,
              ]}
              onPress={handleSignUp}
              disabled={loading}
            >
              <Text style={styles.signUpButtonText}>
                {loading ? authMessages.loading : "Sign up"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signInLink}
              onPress={handleSignIn}
              disabled={loading}
            >
              <Text style={styles.signInText}>Already have an account?</Text>
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
  inputError: {
    borderColor: "#ef4444",
  },
  errorText: {
    color: "#ef4444",
    fontSize: 14,
    marginTop: 4,
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
  signUpButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  signUpButtonDisabled: {
    backgroundColor: "#9ca3af",
  },
  signUpButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "NotoSans-Medium",
  },
  signInLink: {
    alignItems: "center",
  },
  signInText: {
    color: "#666",
    fontSize: 16,
    fontFamily: "NotoSans-Regular",
  },
});
