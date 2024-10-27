import { GitHubRepo } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;


export async function fetchGithubRepos(username: string) {
  try {
    const headers = {
      Accept: "application/vnd.github.v3+json",
      // Add token if you need private repos
      // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
    };

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=updated`,
      { headers },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and sort by stars if desired
    const filteredRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    return filteredRepos;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    throw error;
  }
}
