'use client';
import { useGithubContributions } from '@/utils/rq/hooks/useGithubContibutions';
export default function GithubActivity() {
  const { data: contributions, error, isLoading } = useGithubContributions();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <h1 className="text-7xl">{contributions?.length}</h1>
      <pre>{JSON.stringify(contributions, null, 2)}</pre>
    </div>
  );
}
