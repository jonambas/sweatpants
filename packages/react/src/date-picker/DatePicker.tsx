'use client';

import { Dispatch, FC, SetStateAction, forwardRef, useState } from 'react';
import {
  CaptionProps,
  DayPicker,
  DayPickerSingleProps,
  DayProps,
  useDayPicker,
  useNavigation
} from 'react-day-picker';
import { TextField } from '../text-field/TextField';
import { css } from '@styles/css';
import { Button } from '../button/Button';
import { format, getMonth, getYear, setMonth, setYear } from 'date-fns';
import { Select } from '../select/Select';
import { Text } from '../text/Text';
import { makeYears } from './utils';
import { ChevronDown } from '../icons/icons';

export type DatePickerProps = Omit<DayPickerSingleProps, 'mode'> & {
  id: string;
};

const dayStyles = css({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '30px',
  h: '30px',
  m: '1',
  borderRadius: '50%',
  fontSize: '4',
  transition: '0.15s',
  '&:not([aria-selected="true"])': {
    _hover: {
      bg: 'gray5'
    }
  },
  '&[aria-selected="true"]': {
    bg: 'blue9',
    color: 'gray1',
    fontWeight: 'bold'
  },
  _focusVisible: {
    outline: 'none',
    boxShadow: 'focus'
  }
});

const dayOutsideStyles = css({
  color: 'gray9'
});

const tableStyles = css({
  width: 'fit-content',
  mt: '5'
});

const cellStyles = css({
  width: '30px'
});

const Caption = (props: CaptionProps): JSX.Element => {
  const { toYear } = useDayPicker();
  const { goToMonth, currentMonth, previousMonth, nextMonth } = useNavigation();

  const yearItems = makeYears();

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '5'
      })}
    >
      <Button
        kind="bare"
        size="sm"
        disabled={!previousMonth}
        onClick={() => {
          previousMonth && goToMonth(previousMonth);
        }}
        className={css({
          w: '30px',
          h: '30px',
          p: '0!',
          justifyContent: 'center'
        })}
      >
        <ChevronDown className={css({ transform: 'rotate(90deg)' })} />
      </Button>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '1' })}>
        <Text looksLike="strong">{format(currentMonth, 'MMM')}</Text>
        <Select
          id="datepicker-year"
          size="md"
          kind="bare"
          hideChevron
          value={format(currentMonth, 'yyyy')}
          onValueChange={(v) => {
            goToMonth(setYear(currentMonth, Number(v)));
          }}
          className={css({
            '& button': {
              fontWeight: 'bold',
              color: 'gray12',
              px: '3',
              textDecoration: 'underline',
              textDecorationStyle: 'dotted',
              textDecorationColor: 'gray9',
              textUnderlineOffset: '4px'
            }
          })}
        >
          {yearItems.map((year) => {
            return (
              <Select.Item key={`year-select-${year}`} value={year}>
                {year}
              </Select.Item>
            );
          })}
        </Select>
      </div>

      <Button
        kind="bare"
        size="sm"
        disabled={!nextMonth}
        onClick={() => {
          nextMonth && goToMonth(nextMonth);
        }}
        className={css({
          w: '30px',
          h: '30px',
          p: '0!',
          justifyContent: 'center'
        })}
      >
        <ChevronDown className={css({ transform: 'rotate(-90deg)' })} />
      </Button>
    </div>
  );
};

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, userRef) => {
    const { id, ...rest } = props;
    const [selected, setSelected] = useState<Date>(new Date());

    return (
      <div
        className={css({
          position: 'relative',
          width: 'fit-content'
        })}
      >
        <DayPicker
          numberOfMonths={1}
          mode="single"
          selected={selected}
          onDayClick={setSelected}
          toYear={getYear(new Date())}
          fromYear={2005}
          showOutsideDays
          hideHead
          classNames={{
            day: dayStyles,
            day_outside: dayOutsideStyles,
            table: tableStyles,
            cell: cellStyles
          }}
          components={{
            Caption
          }}
          {...rest}
        />
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
export { DatePicker };
