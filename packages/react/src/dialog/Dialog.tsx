'use client';

import {
  ComponentPropsWithRef,
  MutableRefObject,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { css } from '@styles/css';
import { Button } from '../button/Button';
import { Cross } from '../icons/icons';
import { Text } from '../text/Text';
import { ScreenReaderOnly } from '../screen-reader-only/ScreenReaderOnly';

export type DialogProps = ComponentPropsWithRef<'div'> &
  RadixDialog.DialogProps & {
    trigger?: ReactNode;
    title?: ReactNode;
  };

const overlay = css({
  position: 'fixed',
  zIndex: '10',
  inset: 0,
  background: { base: '#00000090', _dark: '#00000090' },
});

const content = css({
  position: 'fixed',
  zIndex: '11',
  top: '50%',
  left: '50%',
  transform: 'scale(0.9) translate(-50%, -50%)',
  transformOrigin: 'top left',
  background: 'contentBg',
  borderRadius: { sm: 'xl', base: '0' },
  borderWidth: '1px',
  borderColor: 'borders',
  boxShadow: '0 0 12px 0px rgba(0,0,0,0.05)',
  p: '6',
  maxWidth: '30rem',
  width: '100%',
});

const close = css({
  position: 'absolute!',
  py: '4',
  right: '4',
  top: '4',
});

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, userRef) => {
  const { children, title, trigger, defaultOpen, open, onOpenChange, ...rest } =
    props;
  const [internalOpen, setInternalOpen] = useState<boolean>(
    defaultOpen ?? open ?? false,
  );

  const ref = useRef(null) as MutableRefObject<HTMLElement | null>;

  useEffect(() => {
    if (typeof document !== 'undefined' && document.body) {
      ref.current = document.body;
    }
  }, []);

  const handleOpenChange = (value: boolean) => {
    setInternalOpen(value);
    onOpenChange?.(value);
  };

  const finalOpen = open ?? internalOpen;

  return (
    <RadixDialog.Root
      ref={userRef}
      onOpenChange={handleOpenChange}
      open={finalOpen}
      {...rest}
    >
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <AnimatePresence>
        {finalOpen ?
          <RadixDialog.Portal forceMount>
            <RadixDialog.Overlay asChild className={overlay}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </RadixDialog.Overlay>
            <RadixDialog.Content className={content} asChild>
              <motion.div
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                initial={{
                  opacity: 0,
                  transform: 'scale(0.98) translate(-50%, -50%)',
                }}
                animate={{
                  opacity: 1,
                  transform: 'scale(1) translate(-50%, -50%)',
                }}
                exit={{
                  opacity: 0,
                  transform: 'scale(0.98) translate(-50%, -50%)',
                }}
              >
                {title ?
                  <RadixDialog.Title asChild>
                    <Text
                      element="h2"
                      looksLike="h4"
                      className={css({ mb: '5' })}
                    >
                      {title}
                    </Text>
                  </RadixDialog.Title>
                : null}
                {children}
                <RadixDialog.Close asChild>
                  <Button className={close} kind="bare" size="md" iconOnly>
                    <ScreenReaderOnly>Close</ScreenReaderOnly>
                    <Cross />
                  </Button>
                </RadixDialog.Close>
              </motion.div>
            </RadixDialog.Content>
          </RadixDialog.Portal>
        : null}
      </AnimatePresence>
    </RadixDialog.Root>
  );
});

Dialog.displayName = 'Dialog';

export { Dialog };
