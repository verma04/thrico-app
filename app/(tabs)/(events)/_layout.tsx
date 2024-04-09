import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "react-native-elements";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#36348e",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          presentation: "modal",
          headerTitle: "Events",
          headerRight: () => (
            <Pressable onPress={() => router.push("/(tabs)/(events)/AddEvent")}>
              <AntDesign
                name="pluscircle"
                size={24}
                color="#fff
              fff"
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => router.push("/(tabs)/(events)/AddEvent")}>
              <AntDesign name="qrcode" size={24} color="#ffffff" />
            </Pressable>
          ),
        }}
      />

      <Stack.Screen
        name="AddEvent"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
