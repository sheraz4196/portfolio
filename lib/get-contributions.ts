const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function fetchContributions(username: string) {
  try {
    const { data: repos } = await octokit.repos.listForUser({
      username,
    });
    const allContributions = [];
    for (const repo of repos) {
      try {
        const { data: commits } = await octokit.repos.listCommits({
          owner: username,
          repo: repo.name,
        });
        allContributions.push(...commits);
      } catch (error) {
        console.error(`Error fetching commits for ${username}/${repo.name}:`, error);
      }
    }
    return allContributions;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}
