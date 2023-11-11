import { createContext, useContext } from 'react';

export type ColorSchemeContextValue = [
  scheme: 'light' | 'dark',
  setScheme: (scheme: ColorSchemeContextValue[0]) => void
];

export const ColorSchemeContext = createContext<ColorSchemeContextValue>([
  'light',
  () => {}
]);
