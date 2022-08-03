import { useQuery } from "@tanstack/react-query";
import { Post } from "types";
import api from "utils/api";

export default function usePost(id: string | undefined) {
  return useQuery<Post>(["posts", id], async () => {
    const [post, comments] = await Promise.all([
      api.get(`/posts/${id}`).then((res) => res.data),
      api.get(`/posts/${id}/comments`).then((res) => res.data),
    ]);

    return { ...post, comments: comments } as Post;
  });
}
