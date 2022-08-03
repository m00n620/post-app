import { useQuery } from "@tanstack/react-query";
import { Post } from "types";
import api from "utils/api";

export default function usePosts(userId?: string) {
  return useQuery<Post[]>(["posts", "user", userId], () =>
    api
      .get("/posts")
      .then((res) =>
        res.data.filter((p: Post) =>
          userId ? p.userId == Number(userId) : true
        )
      )
  );
}
