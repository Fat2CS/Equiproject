// Dans _app.js ou _app.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Votre logique personnalisée avec le routeur
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
