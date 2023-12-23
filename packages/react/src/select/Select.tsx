'use client';

import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  forwardRef
} from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { SelectItem } from './SelectItem';
import { css, cva, cx } from '@styles/css';
import { Card } from '../card/Card';
import { Stack } from '../stack/Stack';
import { Label } from '../label/Label';
import { CaretVertical } from '../icons/icons';

export type SelectProps = Omit<ComponentPropsWithRef<'select'>, 'size'> &
  ComponentPropsWithoutRef<typeof RadixSelect.Root> & {
    kind?: 'neutral' | 'bare';
    hideChevron?: boolean;
    hideLabel?: boolean;
    hasError?: boolean;
    id: string;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
  };

const containerStyles = css({
  w: '100%'
});

const triggerStyles = cva({
  base: {
    w: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'sm',
    background: 'transparent',
    fontSize: '3',
    paddingX: '3',
    transition: '0.15s',
    cursor: 'pointer',
    outline: 'none',
    color: 'gray12',
    whiteSpace: 'nowrap'
  },
  variants: {
    hideChevron: {
      true: {
        gap: '3'
      },
      false: {}
    },
    size: {
      lg: {
        fontSize: '5',
        paddingX: '5',
        lineHeight: 'calc(2.5rem - 2px)'
      },
      md: { fontSize: '4', paddingX: '4', lineHeight: 'calc(2rem - 2px)' },
      sm: { fontSize: '3', paddingX: '4', lineHeight: 'calc(1.75rem - 2px)' }
    },
    kind: {
      neutral: {
        borderColor: 'gray7',
        boxShadow: 'sm',
        '&:hover:not(:focus)': {
          borderColor: 'gray8'
        },
        _focus: {
          outline: 'none',
          borderColor: 'blue9',
          bg: 'blue2'
        }
      },
      bare: {
        bg: 'transparent',
        borderColor: 'transparent',
        position: 'relative',
        color: 'gray10',
        _before: {
          content: '""',
          position: 'absolute',
          zIndex: '1',
          top: '-1px',
          bottom: '-1px',
          left: '-1px',
          right: '-1px',
          bg: 'gray12',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray12',
          borderRadius: 'inherit',
          opacity: '0',
          transition: 'opacity 0.15s'
        },
        '&:hover:not(:focus)': {
          color: 'gray12',
          bg: 'transparent',
          _before: {
            opacity: '0.08'
          }
        },
        _focus: {
          outline: 'none',
          boxShadow: 'focus',
          bg: 'blue2'
        }
      }
    },
    hasError: {
      true: {
        borderColor: 'red8',
        background: 'red2',
        '&:hover:not(:focus)': {
          borderColor: 'red9!'
        },
        _focus: {
          borderColor: 'red9',
          background: 'red2'
        }
      },
      false: {}
    }
  }
});

const Select = forwardRef<HTMLButtonElement, SelectProps>((props, userRef) => {
  const {
    children,
    className,
    hasError = false,
    hideChevron = false,
    hideLabel = false,
    id,
    kind = 'neutral',
    label,
    placeholder = 'Select...',
    size = 'md',
    ...rest
  } = props;

  return (
    <div className={cx(containerStyles, className)}>
      <Label hide={hideLabel} id={id}>
        {label}
      </Label>
      <RadixSelect.Root {...rest}>
        <RadixSelect.Trigger
          id={id}
          className={triggerStyles({ kind, hideChevron, hasError, size })}
          ref={userRef}
        >
          <RadixSelect.Value placeholder={placeholder} />
          {!hideChevron && (
            <RadixSelect.Icon>
              <CaretVertical width="14" height="14" />
            </RadixSelect.Icon>
          )}
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content
            className={css({ position: 'relative', zIndex: '20' })}
          >
            <RadixSelect.Viewport asChild>
              <Card kind="elevated" space="tight">
                <Stack space="tight">{children}</Stack>
              </Card>
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}) as ForwardRefExoticComponent<SelectProps> & {
  Item: typeof SelectItem;
};

Select.displayName = 'Select';
Select.Item = SelectItem;

export { Select };
