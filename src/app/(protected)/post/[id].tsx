import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";

export default function DetailedPost() {
  const { id } = useLocalSearchParams();
  const detailedPost = posts.find((post) => post.id === id);

  if (!detailedPost) {
    return <Text>Post not found!</Text>;
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <PostListItem post={detailedPost} isDetailedPost />
    </ScrollView>
  );
}
