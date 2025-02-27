import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@clerk/clerk-expo";

export default function TabsLayout() {
  const { signOut } = useAuth();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        // headerTransparent: true,
        headerRight: () => (
          <Feather
            name="log-out"
            size={22}
            color={"black"}
            style={{ paddingRight: 10 }}
            onPress={() => signOut()}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Reddit",
          headerTintColor: "#FF5700",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerTitle: "Reddit",
          headerTintColor: "#FF5700",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerTitle: "Reddit",
          headerTintColor: "#FF5700",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" color={color} size={24} />
          ),
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerTitle: "Reddit",
          headerTintColor: "#FF5700",
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          headerTitle: "Reddit",
          headerTintColor: "#FF5700",
          tabBarIcon: ({ color }) => (
            <Feather name="users" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
