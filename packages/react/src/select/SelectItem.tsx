import * as RadixSelect from '@radix-ui/react-select';
import { css, cva } from '@styles/css';
import { ComponentPropsWithoutRef, FC } from 'react';
import { Check } from '../icons/icons';

export type SelectItemProps = ComponentPropsWithoutRef<typeof RadixSelect.Item>;

const itemStyles = cva({
  base: {
    fontSize: '4',
    display: 'flex',
    w: '100%',
    alignItems: 'center',
    gap: '4',
    paddingX: '4',
    lineHeight: 'calc(1.75rem - 2px)',
    cursor: 'pointer',
    outline: 'none',
    color: 'gray12',
    borderRadius: 'sm',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    '&:hover, &:focus': {
      boxShadow: 'none',
      outline: 'none',
      bg: 'gray5'
    },
    '&[data-state=checked]': {
      _lightScheme: {
        borderColor: 'gray12',
        bg: 'gray12',
        color: 'gray1',
        '&:hover, &:focus': {
          bg: 'gray12'
        }
      },
      _darkScheme: {
        borderColor: 'blue8',
        bg: 'blue8',
        color: 'blue12',
        '&:hover, &:focus': {
          bg: 'blue8'
        }
      }
    }
  }
});

const SelectItem: FC<SelectItemProps> = (props) => {
  const { children, value } = props;

  return (
    <RadixSelect.Item value={value} className={itemStyles()}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <span>
        <RadixSelect.ItemIndicator>
          <Check width="14" height="14" />
        </RadixSelect.ItemIndicator>
      </span>
    </RadixSelect.Item>
  );
};

SelectItem.displayName = 'Select.Item';

export { SelectItem };
