'use client';

import { type KeyboardEvent, createContext } from 'react';
import type { ButtonProps } from '../button/Button';
import { noop } from '../utils/noop';

export type TabsContextType = {
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>, val: string) => void;
  onClick: (val: string) => void;
  size?: ButtonProps['size'];
  value: string;
};

export const TabsContext = createContext<TabsContextType>({
  value: '',
  onKeyDown: noop,
  onClick: noop,
});
