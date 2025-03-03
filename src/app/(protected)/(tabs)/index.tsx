import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PostListItem from "../../../components/PostListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import posts from "../../../../assets/data/posts.json";

import { supabase } from "../../../lib/supabase";

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*, group:groups(*), user:users!posts_user_id_fkey(*)");
    console.log("error", error);
    console.log("data", JSON.stringify(data, null, 2));

    setPosts(data);
  };

  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <StatusBar style="auto" />
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </SafeAreaView>
  );
}
