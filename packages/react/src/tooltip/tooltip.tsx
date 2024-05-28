'use client';

import * as RadixTooltip from '@radix-ui/react-tooltip';
import { FC, forwardRef, PropsWithChildren } from 'react';
import { css, cva } from '@styles/css';

const Provider: FC<PropsWithChildren & RadixTooltip.TooltipProviderProps> = ({
  children,
  ...rest
}) => {
  return (
    <RadixTooltip.Provider delayDuration={300} {...rest}>
      {children}
    </RadixTooltip.Provider>
  );
};

const contentStyles = cva({
  base: {
    bg: { base: 'gray12', _dark: 'white' },
    borderRadius: 'xs',
    boxShadow: 'md',
    color: { base: 'white', _dark: 'gray1' },
    pointerEvents: 'none',
  },
  variants: {
    size: {
      sm: {
        fontSize: '2',
        py: '2',
        px: '3',
      },
      md: {
        fontSize: '3',
        py: '3',
        px: '4',
      },
    },
    hideArrow: {
      true: {
        m: '3',
      },
      false: {},
    },
  },
});

export interface TooltipContentProps extends RadixTooltip.TooltipContentProps {
  size?: 'sm' | 'md';
  hideArrow?: boolean;
}

const Content = forwardRef<HTMLDivElement, TooltipContentProps>(
  (props, userRef) => {
    const { children, hideArrow = false, size = 'md', ...rest } = props;

    return (
      <RadixTooltip.Content arrowPadding={3} {...rest} ref={userRef}>
        {!hideArrow ?
          <RadixTooltip.Arrow
            width={10}
            height={3}
            className={css({
              fill: { base: 'gray12', _dark: 'white' },
            })}
          />
        : null}
        <div className={contentStyles({ size, hideArrow })}>{children}</div>
      </RadixTooltip.Content>
    );
  },
);

export const Tooltip = {
  Provider,
  Content,
  Trigger: RadixTooltip.Trigger,
  Arrow: RadixTooltip.Arrow,
  Root: RadixTooltip.Root,
  Portal: RadixTooltip.Portal,
};
