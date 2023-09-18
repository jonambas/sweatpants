'use client';

import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { css } from '@styles/css';
import { Button } from '../button/Button';
import { Cross } from '../icons/icons';
import { ScreenReaderOnly } from '../screen-reader-only/ScreenReaderOnly';

export type DrawerProps = ComponentPropsWithRef<'div'> &
  Dialog.DialogProps & {
    trigger?: ReactNode;
  };

const overlay = css({
  position: 'fixed',
  zIndex: '2',
  inset: 0,
  background: '#b9bbc650', // gray8
  transition: '0.15s',
  animation: ['fadein 150ms linear']
});

const content = css({
  position: 'fixed',
  zIndex: '2',
  insetY: '0',
  right: '0',
  background: 'baseBg',
  borderTopLeftRadius: 'xl',
  borderBottomLeftRadius: 'xl',
  boxShadow: '0 0 24px 0px rgba(0,0,0,0.1)',
  p: '6',
  maxWidth: '100%',
  width: '100%',
  height: '95%',
  top: 'auto',
  animation: ['slideinbottom .25s cubic-bezier(0.33, 1, 0.68, 1)'],
  sm: {
    maxWidth: '90%',
    width: '350px',
    height: '100%',
    top: '0',
    animation: ['slideinright .25s cubic-bezier(0.33, 1, 0.68, 1)']
  }
});

const close = css({
  position: 'absolute',
  py: '4',
  right: '4',
  top: '4'
});

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, userRef) => {
  const { children, trigger, ...rest } = props;
  return (
    <Dialog.Root ref={userRef} {...rest}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay} />
        <Dialog.Content className={content}>
          {children}
          <Dialog.Close asChild>
            <Button className={close} kind="bare" size="md">
              <ScreenReaderOnly>Close</ScreenReaderOnly>
              <Cross />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

Drawer.displayName = 'Drawer';

export { Drawer };
