import { useQuery } from '@tanstack/react-query';
export const GET_GITHUB_CONTRIBUTIONS = 'get-github-contributions';
import fetchContributions from '@/lib/get-contributions';

export function useAllCandidates() {
  return useQuery({
    queryKey: [GET_GITHUB_CONTRIBUTIONS],
    queryFn: () => fetchContributions('sheraz4196'),
  });
}
