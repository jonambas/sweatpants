import { useCallback, useEffect, useRef, useState } from 'react';

export type UseColorScheme = {
  prefers: 'light' | 'dark';
  setPreference: (scheme: UseColorScheme['prefers']) => void;
};

const useColorScheme = ({ setHtmlAttribute = false } = {}): [
  UseColorScheme['prefers'],
  UseColorScheme['setPreference']
] => {
  const [prefers, setPrefers] = useState<UseColorScheme['prefers']>('light');
  const mql = useRef<MediaQueryList>();

  const handleScheme = useCallback((event: MediaQueryListEvent) => {
    setPrefers(event.matches ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && setHtmlAttribute) {
      document
        .querySelector('html')
        ?.setAttribute('data-color-scheme', prefers);
    }
  }, [prefers, setHtmlAttribute]);

  useEffect(() => {
    mql.current = window.matchMedia('(prefers-color-scheme: dark)');
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

  return [prefers, setPrefers];
};

export { useColorScheme };