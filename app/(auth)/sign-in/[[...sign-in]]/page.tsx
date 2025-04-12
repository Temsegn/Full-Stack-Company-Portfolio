'use client';

import { SignIn, useUser } from '@clerk/nextjs';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignInPage() {
  const { user, isLoaded } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectUrl = searchParams?.get('redirect_url') || '/course';
  const normalizedRedirectUrl = redirectUrl.startsWith('http')
    ? new URL(redirectUrl).pathname + new URL(redirectUrl).search
    : redirectUrl;

  console.log('Sign-In - User:', user, 'Redirecting to:', normalizedRedirectUrl);

  useEffect(() => {
    if (isLoaded && user) {
      router.push(normalizedRedirectUrl); // Force redirect after sign-in
    }
  }, [user, isLoaded, router, normalizedRedirectUrl]);

  if (isLoaded && user) return <div>Redirecting to {normalizedRedirectUrl}...</div>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SignIn afterSignInUrl={normalizedRedirectUrl} />
    </div>
  );
}