import { useCallback, useEffect, useRef, useState } from 'react';

export type UseColorScheme = {
  scheme: 'light' | 'dark';
  setScheme: (scheme: UseColorScheme['scheme']) => void;
};

const useColorScheme = ({ setHtmlAttribute = false } = {}): [
  UseColorScheme['scheme'],
  UseColorScheme['setScheme']
] => {
  const [scheme, setScheme] = useState<UseColorScheme['scheme']>('light');
  const mql = useRef<MediaQueryList>();

  const setHtml = (v: UseColorScheme['scheme']) => {
    if (typeof window !== 'undefined' && setHtmlAttribute) {
      document.querySelector('html')?.setAttribute('data-color-scheme', v);
    }
  };

  // Initial mount
  useEffect(() => {
    mql.current = window.matchMedia('(prefers-color-scheme: dark)');
    setScheme(mql.current.matches ? 'dark' : 'light');
    setHtml(mql.current.matches ? 'dark' : 'light');
  }, []);

  // When media query changes
  const handleScheme = useCallback((event: MediaQueryListEvent) => {
    const newOs = event.matches ? 'dark' : 'light';
    setScheme(newOs);
    setHtml(newOs);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && mql.current) {
      mql.current.addEventListener('change', handleScheme);
    }

    return () => {
      if (typeof window !== 'undefined' && mql.current) {
        mql.current.removeEventListener('change', handleScheme);
      }
    };
  }, []);

  const userSetScheme = useCallback(
    (v: UseColorScheme['scheme']) => {
      setScheme(v);
      setHtml(v);
    },
    [setHtmlAttribute]
  );
  return [scheme, userSetScheme];
};

export { useColorScheme };
