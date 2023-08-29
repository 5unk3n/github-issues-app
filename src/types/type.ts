interface User {
  login: string;
  avatar_url: string;
}

export interface IssueType {
  id: number;
  number: number;
  title: string;
  created_at: string;
  user: User;
  comments: number;
  body: string;
}
