import { createContext, useContext } from 'react';
import { ButtonProps } from '../button/Button';

export type ButtonGroupContext = Pick<ButtonProps, 'size' | 'kind'> | null;
export const ButtonGroupContext = createContext<ButtonGroupContext>(null);

export const useButtonGroup = () => useContext(ButtonGroupContext);
