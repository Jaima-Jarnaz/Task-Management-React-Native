import {
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase-config";

// Create the context
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// User provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get basic auth data
          const basicUserData = {
            uid: user.uid,
            email: user.email,
            name: user.displayName || user.email?.split("@")[0] || "User",
            photoURL: user.photoURL,
            createdAt: user.metadata?.creationTime
              ? new Date(user.metadata.creationTime)
              : null,
            lastSignInTime: user.metadata?.lastSignInTime
              ? new Date(user.metadata.lastSignInTime)
              : null,
          };

          // Try to get additional user data from Firestore
          try {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
              const firestoreData = userDoc.data();
              setUserData({
                ...basicUserData,
                name: firestoreData.name || basicUserData.name,
                // Add any other fields from Firestore
              });
            } else {
              setUserData(basicUserData);
            }
          } catch (firestoreError) {
            console.error("Error fetching Firestore data:", firestoreError);
            setUserData(basicUserData);
          }
        } catch (error) {
          console.error("Error setting user data:", error);
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign up function
  const signUp = async (email, password, name) => {
    try {
      setIsLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update the user's display name
      if (name && userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name,
        });
      }

      // User data will be set automatically by the auth state listener
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  // Sign in function
  const signIn = async (email, password) => {
    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
      // User data will be set automatically by the auth state listener
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      setIsLoading(true);

      await firebaseSignOut(auth);
      // User data will be cleared automatically by the auth state listener
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const value = {
    userData,
    isLoading,
    signUp,
    signIn,
    signOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
