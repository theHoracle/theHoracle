export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  topics: string[];
}

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  homepage: string | null;
  language: string | null;
  skills: string[];
};
