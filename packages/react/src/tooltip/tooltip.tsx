'use client';

import * as RadixTooltip from '@radix-ui/react-tooltip';
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { css, cva } from '@styles/css';
import { AnimatePresence, motion } from 'framer-motion';

const Provider: FC<PropsWithChildren & RadixTooltip.TooltipProviderProps> = (
  props,
) => {
  const { children, ...rest } = props;

  return (
    <RadixTooltip.Provider delayDuration={300} {...rest}>
      {children}
    </RadixTooltip.Provider>
  );
};

const TooltipContext = createContext<{ open?: boolean }>({});

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

const Content: FC<TooltipContentProps> = (props) => {
  const { children, hideArrow = false, size = 'md', ...rest } = props;
  const context = useContext(TooltipContext);

  return (
    <AnimatePresence>
      {context.open ?
        <RadixTooltip.Content arrowPadding={3} {...rest} asChild aria-hidden>
          <motion.div
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            initial={{
              opacity: 0,
              transform: 'scale(0.9)',
            }}
            animate={{
              opacity: 1,
              transform: 'scale(1)',
            }}
          >
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
          </motion.div>
        </RadixTooltip.Content>
      : null}
    </AnimatePresence>
  );
};

const Root: FC<RadixTooltip.TooltipProps> = (props) => {
  const {
    children,
    open: controlledOpen,
    onOpenChange,
    defaultOpen,
    ...rest
  } = props;
  const [open, setOpen] = useState(defaultOpen ?? controlledOpen ?? false);

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    onOpenChange?.(value);
  };

  const finalOpen = controlledOpen ?? open;
  return (
    <RadixTooltip.Root
      open={finalOpen}
      onOpenChange={handleOpenChange}
      {...rest}
    >
      <TooltipContext.Provider value={{ open: finalOpen }}>
        {children}
      </TooltipContext.Provider>
    </RadixTooltip.Root>
  );
};

Provider.displayName = 'Tooltip.Provider';
Content.displayName = 'Tooltip.Content';
Root.displayName = 'Tooltip.Root';

export const Tooltip = {
  Provider,
  Content,
  Root,
  Trigger: RadixTooltip.Trigger,
  Arrow: RadixTooltip.Arrow,
  Portal: RadixTooltip.Portal,
};
