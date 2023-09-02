import { createContext } from 'react';

const noop = () => {};

export type SchemeContextValue = {
  prefers: 'light' | 'dark';
  setPreference: (scheme: SchemeContextValue['prefers']) => void;
};

export const SchemeContext = createContext<SchemeContextValue>({
  prefers: 'light',
  setPreference: noop
});
