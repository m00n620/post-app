import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

import { Post } from "types";

export default function PostList({ posts }: { posts?: Post[] }) {
  const navigate = useNavigate();

  if (!posts || posts.length === 0) return <>No posts!</>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {posts.map((p) => (
        <ListItem key={p.id} alignItems="flex-start" sx={{ p: 0 }}>
          <ListItemButton onClick={() => navigate(`/posts/${p.id}`)}>
            <ListItemText primary={p.title} secondary={p.body} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
