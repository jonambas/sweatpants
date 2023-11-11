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
  defaultScheme?: ColorSchemeContextValue[0];
  onSchemeChange?: ColorSchemeContextValue[1];
}>;

const ColorSchemeProvider: FC<ColorSchemeProviderProps> = (props) => {
  const {
    children,
    setHtmlAttribute = false,
    defaultScheme,
    onSchemeChange
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
    if (defaultScheme) {
      setScheme(defaultScheme);
      setHtml(defaultScheme);
    } else {
      setScheme(mql.current.matches ? 'dark' : 'light');
      setHtml(mql.current.matches ? 'dark' : 'light');
    }
  }, []);

  // When media query changes
  const handleScheme = useCallback(
    (event: MediaQueryListEvent) => {
      const newOs = event.matches ? 'dark' : 'light';
      setScheme(newOs);
      setHtml(newOs);
      onSchemeChange?.(newOs);
    },
    [onSchemeChange]
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && mql.current) {
      mql.current.addEventListener('change', handleScheme);
    }

    return () => {
      if (typeof window !== 'undefined' && mql.current) {
        mql.current.removeEventListener('change', handleScheme);
      }
    };
  }, [handleScheme]);

  const contextSetScheme = useCallback(
    (v: ColorSchemeContextValue[0]) => {
      setScheme(v);
      setHtml(v);
      onSchemeChange?.(v);
    },
    [setHtmlAttribute]
  );

  return (
    <ColorSchemeContext.Provider value={[scheme, contextSetScheme]}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

ColorSchemeProvider.displayName = 'ColorSchemeProvider';

export { ColorSchemeProvider };
