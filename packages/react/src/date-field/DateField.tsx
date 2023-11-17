'use client';

import { ChangeEventHandler, forwardRef, useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';

import { TextField, TextFieldProps } from '../text-field/TextField';
import { DatePicker } from '../date-picker/DatePicker';
import { css } from '@styles/css';
import { Card } from '../card/Card';
import {
  addYears,
  format,
  isAfter,
  isBefore,
  isValid,
  parse,
  subYears
} from 'date-fns';

export type DateFieldProps = Omit<
  TextFieldProps,
  'type' | 'value' | 'defaultValue'
> & {
  id: string;
  defaultValue?: Date;
  value?: Date;
  onValueChange?: (value: Date) => void;
  fromDate?: Date;
  toDate?: Date;
};

const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  (props, userRef) => {
    const {
      align = 'left',
      id,
      defaultValue,
      value,
      onValueChange,
      label,
      hasError = false,
      hideLabel = false,
      size = 'md',
      fromDate = subYears(new Date(), 20),
      toDate = addYears(new Date(), 20)
    } = props;

    const dayToString = (day: Date) => {
      return format(day, 'MM/dd/yyyy');
    };

    const stringToDay = (day: string) => {
      return parse(day, 'MM/dd/yyyy', new Date());
    };

    const [internalValue, setInternalValue] = useState<string>(
      dayToString(value || defaultValue || new Date())
    );

    const [displayMonth, setDisplayMonth] = useState<Date>(
      stringToDay(internalValue)
    );

    const onDatePickerSelect = (day?: Date) => {
      if (day) {
        setInternalValue(dayToString(day));
      }
    };

    const datePickerValue = stringToDay(internalValue);

    const sanitizeValue = (dateValue: string) => {
      let dateString = stringToDay(dateValue);

      if (!isValid(dateString)) {
        return;
      }

      if (toDate && isAfter(dateString, toDate)) {
        dateString = toDate;
      }
      if (fromDate && isBefore(dateString, fromDate)) {
        dateString = fromDate;
      }

      return dateString;
    };

    useEffect(() => {
      const sanitizedValue = sanitizeValue(internalValue);

      if (!!sanitizedValue) {
        onValueChange?.(sanitizedValue);
      }
    }, [internalValue]);

    const handleFieldOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const string = e.currentTarget.value;
      const sanitizedValue = sanitizeValue(string);

      setInternalValue(string);

      if (!!sanitizedValue) {
        setDisplayMonth(sanitizedValue);
      }
    };

    return (
      <Popover.Root>
        <Popover.Trigger>
          <TextField
            align={align}
            autoComplete="off"
            size={size}
            id={id}
            type="text"
            label={label}
            hasError={hasError}
            hideLabel={hideLabel}
            placeholder="MM/DD/YYYY"
            value={internalValue}
            onChange={handleFieldOnChange}
            ref={userRef}
          />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content asChild onOpenAutoFocus={(e) => e.preventDefault()}>
            <Card kind="elevated" className={css({ m: '3' })}>
              <DatePicker
                onMonthChange={(d) => {
                  setDisplayMonth(d);
                }}
                month={displayMonth}
                selected={datePickerValue}
                onSelect={onDatePickerSelect}
                fromDate={fromDate}
                toDate={toDate}
              />
            </Card>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);

DateField.displayName = 'DateField';
export { DateField };
