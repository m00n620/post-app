import React from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "components/Loader";
import PostList from "components/PostList";
import usePosts from "hooks/usePosts";

export default function PostsPage() {
  const { id } = useParams();
  const { data: posts, isLoading } = usePosts(id);

  if (isLoading) return <Loader />;

  return (
    <>
      <Link to="/posts">Back to all posts</Link>
      <PostList posts={posts} />
    </>
  );
}
