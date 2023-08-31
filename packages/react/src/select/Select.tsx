import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  forwardRef
} from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { SelectItem } from './SelectItem';
import { css, cva } from '@styles/css';
import { Card } from '../card/Card';
import { Stack } from '../stack/Stack';
import { Label } from '../label/Label';

export type SelectProps = Omit<ComponentPropsWithRef<'select'>, 'size'> &
  ComponentPropsWithoutRef<typeof RadixSelect.Root> & {
    label?: string;
    id: string;
    size?: 'sm' | 'md' | 'lg';
    hideLabel?: boolean;
    hasError?: boolean;
  };

const ChevronDown = forwardRef<SVGSVGElement, ComponentPropsWithRef<'svg'>>(
  function ChevronDown(props, ref) {
    return (
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        ref={ref}
        {...props}
      >
        <path
          d="M14 5l-6.5 7L1 5"
          stroke="currentColor"
          strokeLinecap="square"
        ></path>
      </svg>
    );
  }
);

const containerStyles = css({
  w: '100%'
});

const triggerStyles = cva({
  base: {
    w: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '3',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray7',
    borderRadius: 'sm',
    background: 'white',
    fontSize: '3',
    paddingX: '3',
    transition: '0.15s',
    cursor: 'pointer',
    outline: 'none',
    '&:hover:not(:focus)': {
      borderColor: 'gray9'
    },
    _focus: {
      borderColor: 'gray12'
    }
  },
  variants: {
    size: {
      lg: {
        fontSize: '6',
        paddingX: '5',
        lineHeight: 'calc(2.5rem - 2px)'
      },
      md: { fontSize: '5', paddingX: '4', lineHeight: 'calc(2rem - 2px)' },
      sm: { fontSize: '3', paddingX: '4', lineHeight: 'calc(1.75rem - 2px)' }
    },
    hasError: {
      true: {
        borderColor: 'red8',
        background: 'red2',
        '&:hover:not(:focus)': {
          borderColor: 'red9!'
        },
        _focus: {
          borderColor: 'red9'
        }
      },
      false: {}
    }
  }
});

const Select = forwardRef<HTMLButtonElement, SelectProps>((props, userRef) => {
  const {
    children,
    id,
    label,
    hasError = false,
    hideLabel = false,
    placeholder = 'Select...',
    size = 'md',
    ...rest
  } = props;

  return (
    <div className={containerStyles}>
      <Label hide={hideLabel} id={id}>
        {label}
      </Label>
      <RadixSelect.Root {...rest}>
        <RadixSelect.Trigger
          id={id}
          className={triggerStyles({ hasError, size })}
          ref={userRef}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            <ChevronDown width="11" height="11" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content>
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
