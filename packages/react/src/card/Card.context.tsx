import { createContext, useContext } from 'react';

export type CardContextValue = {
  space?: 'loose' | 'normal' | 'tight' | 'none';
  kind?: 'elevated' | 'neutral';
};

export const CardContext = createContext<CardContextValue>({});
export const useCardContext = () => useContext(CardContext);
