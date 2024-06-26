'use client';

import { createContext, useContext, useState, type FC } from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { motion, AnimatePresence } from 'framer-motion';
import { css, cx } from '@styles/css';
import { Card } from '../card/Card';

const PopoverContext = createContext<{ open?: boolean }>({});

const Content: FC<RadixPopover.PopoverContentProps> = ({
  children,
  className,
  ...rest
}) => {
  const context = useContext(PopoverContext);

  return (
    <AnimatePresence>
      {context.open ?
        <RadixPopover.Content
          asChild
          forceMount
          {...rest}
          className={cx(
            css({
              position: 'relative',
              zIndex: '20',
              m: 3,
              borderRadius: 'md',
              _focusVisible: {
                outline: 'none',
                boxShadow: 'focus',
              },
            }),
            className,
          )}
        >
          <motion.div
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            initial={{
              opacity: 0,
              transform: 'scale(0.96)',
            }}
            animate={{
              opacity: 1,
              transform: 'scale(1)',
            }}
            exit={{
              opacity: 0,
              transform: 'scale(0.98)',
            }}
          >
            <Card kind="elevated">{children}</Card>
          </motion.div>
        </RadixPopover.Content>
      : null}
    </AnimatePresence>
  );
};

const Root: FC<RadixPopover.PopoverProps> = (props) => {
  const {
    children,
    open: controlledOpen,
    defaultOpen,
    onOpenChange,
    ...rest
  } = props;

  const [open, setOpen] = useState(defaultOpen ?? controlledOpen ?? false);

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    onOpenChange?.(value);
  };

  const finalOpen = controlledOpen ?? open;

  return (
    <PopoverContext.Provider value={{ open: finalOpen }}>
      <RadixPopover.Root
        open={finalOpen}
        onOpenChange={handleOpenChange}
        {...rest}
      >
        {children}
      </RadixPopover.Root>
    </PopoverContext.Provider>
  );
};

Root.displayName = 'Popover.Root';
Content.displayName = 'Popover.Content';

export const Popover = {
  Root,
  Content,
  Trigger: RadixPopover.Trigger,
  Close: RadixPopover.Close,
  Portal: RadixPopover.Portal,
};
