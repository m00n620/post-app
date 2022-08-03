import React from "react";

import Loader from "components/Loader";
import PostList from "components/PostList";
import usePosts from "hooks/usePosts";

export default function PostsPage() {
  const { data: posts, isLoading } = usePosts();

  if (isLoading) return <Loader />;

  return <PostList posts={posts} />;
}
