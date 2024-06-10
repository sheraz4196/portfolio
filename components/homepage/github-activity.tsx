'use client';

import { useGithubContributions } from '@/utils/rq/hooks/useGithubContibutions';

export default function GithubActivity() {
  const { data: contributions, isError, isLoading } = useGithubContributions();
  return (
    <div>
      <h1 className="text-7xl">{contributions?.length}</h1>
      <pre>{JSON.stringify(contributions, null, 2)}</pre>
    </div>
  );
}
