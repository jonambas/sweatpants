import { useCallback, useEffect, useRef, useState } from 'react';
import { SchemeContextValue } from './useColorScheme.context';

const useColorScheme = ({
  setHtmlAttribute = false
} = {}): SchemeContextValue['prefers'] => {
  const [prefers, setPrefers] =
    useState<SchemeContextValue['prefers']>('light');
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

  return prefers;
};

export { useColorScheme };
