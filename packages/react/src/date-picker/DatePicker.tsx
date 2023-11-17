'use client';

import { FC, useState } from 'react';
import {
  DayPicker,
  DayPickerSingleProps,
  useDayPicker,
  useNavigation
} from 'react-day-picker';
import { css } from '@styles/css';
import { Button } from '../button/Button';
import {
  addYears,
  format,
  isAfter,
  isBefore,
  setYear,
  subYears
} from 'date-fns';
import { Select } from '../select/Select';
import { Text } from '../text/Text';
import { makeYears } from './utils';
import { ChevronDown } from '../icons/icons';
import { ScreenReaderOnly } from '../screen-reader-only/ScreenReaderOnly';

export type DatePickerProps = Omit<DayPickerSingleProps, 'mode'>;

const dayStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '30px',
  h: '30px',
  m: '1',
  borderRadius: '50%',
  fontSize: '4',
  transition: '0.15s',
  color: 'gray12',
  '&:not(:disabled)': {
    cursor: 'pointer'
  },
  '&:not([aria-selected="true"]):not(:disabled)': {
    _hover: {
      bg: 'gray5'
    }
  },
  '&[aria-selected="true"]': {
    bg: 'blue9!',
    //  'blue1!',
    color: { _lightScheme: 'blue1', _darkScheme: 'white' },
    fontWeight: 'bold'
  },
  _focusVisible: {
    outline: 'none',
    boxShadow: 'focus'
  }
});

const dayOutsideStyles = css({
  color: 'gray9!'
});

const dayDisabledStyles = css({
  color: 'gray7!'
});

const tableStyles = css({
  width: 'fit-content',
  mt: '5'
});

const cellStyles = css({
  width: '30px'
});

const Caption = (): JSX.Element => {
  const { goToMonth, currentMonth, previousMonth, nextMonth } = useNavigation();
  const { fromDate, toDate } = useDayPicker();

  const yearItems = makeYears(fromDate, toDate);

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
        <ScreenReaderOnly>Previous Month</ScreenReaderOnly>
        <ChevronDown className={css({ transform: 'rotate(90deg)' })} />
      </Button>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '1' })}>
        <Text looksLike="strong">{format(currentMonth, 'MMMM')}</Text>
        <Select
          id="datepicker-year"
          size="md"
          kind="bare"
          hideChevron
          label="Select year"
          hideLabel
          value={format(currentMonth, 'yyyy')}
          onValueChange={(v) => {
            let newDate = setYear(currentMonth, Number(v));
            if (toDate && isAfter(newDate, toDate)) {
              newDate = toDate;
            }
            if (fromDate && isBefore(newDate, fromDate)) {
              newDate = fromDate;
            }
            goToMonth(newDate);
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
        <ScreenReaderOnly>Next Month</ScreenReaderOnly>
        <ChevronDown className={css({ transform: 'rotate(-90deg)' })} />
      </Button>
    </div>
  );
};

const DatePicker: FC<DatePickerProps> = (props) => {
  const {
    selected: userSelected,
    fromDate = subYears(new Date(), 20),
    toDate = addYears(new Date(), 20),
    ...rest
  } = props;
  const [selected, setSelected] = useState<Date>(userSelected || new Date());

  return (
    <div
      className={css({
        width: 'fit-content'
      })}
    >
      <DayPicker
        numberOfMonths={1}
        mode="single"
        selected={selected}
        onDayClick={setSelected}
        showOutsideDays
        hideHead
        classNames={{
          day: dayStyles,
          day_outside: dayOutsideStyles,
          day_disabled: dayDisabledStyles,
          table: tableStyles,
          cell: cellStyles
        }}
        components={{
          Caption
        }}
        fromDate={fromDate}
        toDate={toDate}
        {...rest}
      />
    </div>
  );
};

DatePicker.displayName = 'DatePicker';
export { DatePicker };
