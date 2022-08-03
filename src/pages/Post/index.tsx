import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";

import Loader from "components/Loader";
import usePost from "hooks/usePost";
import { stringAvatar } from "utils";

export default function PostPage() {
  const { id } = useParams();
  const { data: post, isLoading } = usePost(id);

  if (isLoading) return <Loader />;

  if (!post) return <>No post!</>;

  return (
    <Box>
      <Link to={`/users/${post.userId}/posts`}>More posts by same author</Link>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography gutterBottom>{post.body}</Typography>
      {post.comments.length === 0 ? (
        <>No comments yet</>
      ) : (
        <>
          <Typography sx={{ mt: 2 }}>Comments</Typography>
          <List>
            {post.comments.map((c) => (
              <ListItem key={c.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={c.name} {...stringAvatar(c.name)} />
                </ListItemAvatar>
                <Box>
                  <ListItemText secondary={c.body} />
                  <Typography variant="caption">
                    <i>
                      {c.name}, {c.email}
                    </i>
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
