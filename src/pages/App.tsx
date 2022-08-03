import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import PostPage from "./Post";
import PostsPage from "./Posts";
import UserPostsPage from "./UserPosts";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="users/:id/posts" element={<UserPostsPage />} />
          <Route path="*" element={<Navigate to="/posts" replace />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
