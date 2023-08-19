import { createContext, useContext } from 'react';
import { ButtonProps } from '../button/Button';

export type ButtonGroupContext = Pick<ButtonProps, 'size' | 'variant'> | null;
export const ButtonGroupContext = createContext<ButtonGroupContext>(null);

export const useButtonGroup = () => useContext(ButtonGroupContext);
