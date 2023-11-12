'use client';

import { createContext } from 'react';

export type ColorSchemeContextValue = [
  scheme: 'light' | 'dark',
  setScheme: (scheme: ColorSchemeContextValue[0]) => void
];

export const ColorSchemeContext = createContext<ColorSchemeContextValue>([
  'light',
  () => {}
]);
