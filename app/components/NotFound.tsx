'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      {query && (
        <p className="text-lg">
          No results found for: <span className="font-semibold">{query}</span>
        </p>
      )}
      <p className="text-lg">The page you&apos;re looking for doesn&apos;t exist.</p>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
