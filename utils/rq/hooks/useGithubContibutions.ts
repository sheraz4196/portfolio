import { useQuery } from '@tanstack/react-query';
import fetchContributions from '@/lib/get-contributions';
export const GET_GITHUB_CONTRIBUTIONS = 'get-github-contributions';

export function useGithubContributions() {
  return useQuery({
    queryKey: [GET_GITHUB_CONTRIBUTIONS],
    queryFn: () => fetchContributions('sheraz4196'),
  });
}
