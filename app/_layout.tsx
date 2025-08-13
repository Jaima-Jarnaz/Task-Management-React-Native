import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { UserProvider, useUser } from "../context/userContext";

function RootLayoutNav() {
  const { userData, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (userData) {
      // Redirect to tabs if user is signed in
      router.replace("/(tabs)");
    } else {
      // Redirect to index if user is not signed in
      router.replace("/");
    }
  }, [userData, isLoading, router]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      {/* <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="addtask" options={{ headerShown: false }} />
      <Stack.Screen name="todaystasks" options={{ headerShown: false }} /> */}
    </Stack>
  );
}

export default function RootLayout() {
  useFonts({
    "NotoSans-Light": require("../assets/fonts/NotoSans_ExtraCondensed-Light.ttf"),
    "NotoSans-Regular": require("../assets/fonts/NotoSans_Condensed-Light.ttf"),
    "NotoSans-Medium": require("../assets/fonts/NotoSans_SemiCondensed-SemiBold.ttf"),
    "NotoSans-Bold": require("../assets/fonts/NotoSans_ExtraCondensed-Bold.ttf"),
    "NotoSans-Italic": require("../assets/fonts/NotoSans_Condensed-Italic.ttf"),
    "NotoSans-ExtraLightItalic": require("../assets/fonts/NotoSans_Condensed-ExtraLightItalic.ttf"),
  });

  return (
    <UserProvider>
      <RootLayoutNav />
      <StatusBar style="auto" />
    </UserProvider>
  );
}
