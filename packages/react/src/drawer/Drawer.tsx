'use client';

import {
  ComponentPropsWithRef,
  MutableRefObject,
  ReactNode,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import useResizeObserver from '@react-hook/resize-observer';
import { css } from '@styles/css';
import { Button } from '../button/Button';
import { Cross } from '../icons/icons';
import { Text } from '../text/Text';
import { ScreenReaderOnly } from '../screen-reader-only/ScreenReaderOnly';

export type DrawerProps = ComponentPropsWithRef<'div'> &
  Dialog.DialogProps & {
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
  insetY: '0',
  right: '0',
  background: 'contentBg',
  borderTopLeftRadius: 'xl',
  borderBottomLeftRadius: '0',
  borderTopRightRadius: 'xl',
  boxShadow: '0 0 12px 0px rgba(0,0,0,0.05)',
  p: '6',
  maxWidth: '100%',
  width: '100%',
  height: '95%',
  top: 'auto',
  sm: {
    maxWidth: '90%',
    width: '350px',
    height: '100%',
    top: '0',
    borderBottomLeftRadius: 'xl',
    borderTopRightRadius: '0',
  },
});

const close = css({
  position: 'absolute!',
  py: '4',
  right: '4',
  top: '4',
});

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, userRef) => {
  const { children, title, trigger, defaultOpen, open, onOpenChange, ...rest } =
    props;
  const [internalOpen, setInternalOpen] = useState<boolean>(
    defaultOpen ?? open ?? false,
  );
  const [isSmall, setIsSmall] = useState<boolean>(false);
  const ref = useRef(null) as MutableRefObject<HTMLElement | null>;

  useEffect(() => {
    if (typeof document !== 'undefined' && document.body) {
      ref.current = document.body;
      setIsSmall((document.body.getBoundingClientRect()?.width ?? 641) < 640);
    }
  }, []);

  useResizeObserver(ref.current, (entry) => {
    setIsSmall(entry.contentRect.width < 640);
  });

  useLayoutEffect(() => {
    setIsSmall((ref.current?.getBoundingClientRect()?.width ?? 641) < 640);
  }, [ref]);

  const handleOpenChange = (value: boolean) => {
    setInternalOpen(value);
    onOpenChange?.(value);
  };

  const finalOpen = open ?? internalOpen;

  return (
    <Dialog.Root
      ref={userRef}
      onOpenChange={handleOpenChange}
      open={finalOpen}
      {...rest}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <AnimatePresence>
        {finalOpen ?
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild className={overlay}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            <Dialog.Content className={content} asChild>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: isSmall ? 'translateY(100%)' : 'translateX(100%)',
                }}
                animate={{
                  opacity: 1,
                  transform: isSmall ? 'translateY(0)' : 'translateX(0)',
                }}
                exit={{
                  opacity: 0,
                  transform: isSmall ? 'translateY(100%)' : 'translateX(100%)',
                }}
              >
                {title ?
                  <Dialog.Title asChild>
                    <Text
                      element="h2"
                      looksLike="h4"
                      className={css({ mb: '5' })}
                    >
                      {title}
                    </Text>
                  </Dialog.Title>
                : null}
                {children}
                <Dialog.Close asChild>
                  <Button className={close} kind="bare" size="md" iconOnly>
                    <ScreenReaderOnly>Close</ScreenReaderOnly>
                    <Cross />
                  </Button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        : null}
      </AnimatePresence>
    </Dialog.Root>
  );
});

Drawer.displayName = 'Drawer';

export { Drawer };
