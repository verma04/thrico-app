import { router, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Platform, Pressable } from "react-native";
import { View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import { Button } from "@rneui/themed";
import { Stack } from "@rneui/layout";

import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "@rneui/base";
const Layout = () => {
  const headerHeight = 48;

  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "#36348e",
            height: 110,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "#36348e",
          tabBarIconStyle: {
            fontSize: 10,
          },

          tabBarLabelStyle: {
            fontFamily: "mon-sb",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            headerTitle: "",

            headerLeft: () => (
              <Stack row align="center" spacing={20}>
                <Avatar
                  size={"small"}
                  rounded
                  source={{
                    uri: "https://picsum.photos/id/237/200/300",
                  }}
                />
              </Stack>
            ),

            headerRight: () => (
              <Stack row align="center" spacing={8}>
                <AntDesign name="search1" size={24} color="white" />
                <MaterialIcons
                  name="notifications-on"
                  size={24}
                  color="white"
                />
                <Avatar
                  onPress={() => router.push("/(modal)/SwitchAmount")}
                  size={"small"}
                  rounded
                  source={{
                    uri: "https://picsum.photos/id/237/200/300",
                  }}
                />
              </Stack>
            ),

            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(events)"
          options={{
            headerTitle: "Events",
            tabBarLabel: "Events",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <FontAwesome6 name="calendar-day" size={23} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="trips"
          options={{
            tabBarLabel: "Groups",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="people-arrows" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="inbox"
          options={{
            tabBarLabel: "Discussion",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="message-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Profile",

            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person-circle-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      {/* </View>
        </SafeAreaView>
      </View> */}
    </>
  );
};

export default Layout;
