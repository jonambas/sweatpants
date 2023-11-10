import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  ColorSchemeContext,
  ColorSchemeContextValue
} from './ColorSchemeProvider.context';

type ColorSchemeProviderProps = PropsWithChildren<{
  setHtmlAttribute?: boolean;
  controlScheme?: ColorSchemeContextValue[0];
}>;

const ColorSchemeProvider: FC<ColorSchemeProviderProps> = (props) => {
  const {
    children,
    setHtmlAttribute = false,
    controlScheme: userScheme
  } = props;

  const [scheme, setScheme] = useState<ColorSchemeContextValue[0]>('light');
  const mql = useRef<MediaQueryList>();

  const setHtml = (v: ColorSchemeContextValue[0]) => {
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

  const contextSetScheme = useCallback(
    (v: ColorSchemeContextValue[0]) => {
      setScheme(v);
      setHtml(v);
    },
    [setHtmlAttribute]
  );

  // Controlled scheme
  useEffect(() => {
    if (userScheme) {
      contextSetScheme(userScheme);
    }
  }, [userScheme]);

  return (
    <ColorSchemeContext.Provider value={[scheme, contextSetScheme]}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

ColorSchemeProvider.displayName = 'ColorSchemeProvider';

export { ColorSchemeProvider };
