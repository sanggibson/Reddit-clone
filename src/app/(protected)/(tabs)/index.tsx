import { FlatList } from "react-native";
import React from "react";
import PostListItem from "../../../components/PostListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import posts from "../../../../assets/data/posts.json";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </SafeAreaView>
  );
}
