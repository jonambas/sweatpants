import * as RadixSelect from '@radix-ui/react-select';
import { css, cva } from '@styles/css';
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  FC,
  forwardRef
} from 'react';

export type SelectItemProps = ComponentPropsWithoutRef<typeof RadixSelect.Item>;

const Tick = forwardRef<SVGSVGElement, ComponentPropsWithRef<'svg'>>(
  function Tick(props, ref) {
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
          d="M1 7l4.5 4.5L14 3"
          stroke="currentColor"
          strokeLinecap="square"
        ></path>
      </svg>
    );
  }
);

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
      bg: 'gray6'
    },
    '&[data-state=checked]': {
      borderColor: 'blue8',
      bg: 'blue8',
      color: 'blue12',
      '&:hover, &:focus': {
        bg: 'blue8'
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
          <Tick width="11" height="11" />
        </RadixSelect.ItemIndicator>
      </span>
    </RadixSelect.Item>
  );
};

SelectItem.displayName = 'Select.Item';

export { SelectItem };
