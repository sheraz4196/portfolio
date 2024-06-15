import { useQuery } from '@tanstack/react-query';
import { getAllReviews } from '@/lib/client-reviews/get-all-reviews';
export const GET_USER_REVIEWS = 'get-user-reviews';

export function useReviews() {
  return useQuery({
    queryKey: [GET_USER_REVIEWS],
    queryFn: () => getAllReviews(),
  });
}
