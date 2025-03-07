import { View, Text } from "react-native";
import React from "react";
import { Redirect, router, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

export default function AppLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/signIn"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="groupSelector" options={{ headerShown: false }} />
      <Stack.Screen
        name="post/[id]"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#FF5700" },
          headerLeft: () => (
            <AntDesign
              name="close"
              size={24}
              color="white"
              onPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10 }}>
              <AntDesign name="search1" size={24} color="white" />
              <MaterialIcons name="sort" size={27} color="white" />
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
          ),
          animation: "slide_from_left",
        }}
      />
    </Stack>
  );
}
