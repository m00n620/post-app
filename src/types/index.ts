export type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
};
