'use client';

import { ChangeEventHandler, forwardRef, useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';

import { TextField, TextFieldProps } from '../text-field/TextField';
import { DatePicker, DatePickerProps } from '../date-picker/DatePicker';
import { css } from '@styles/css';
import { Card } from '../card/Card';
import { Calendar } from '../icons/icons';
import {
  addYears,
  format,
  isAfter,
  isBefore,
  isValid,
  parse,
  subYears,
} from 'date-fns';

const dayToString = (day: Date) => {
  return format(day, 'MM/dd/yyyy');
};

const stringToDay = (day: string) => {
  return parse(day, 'MM/dd/yyyy', new Date());
};

export type DateFieldProps = Omit<
  TextFieldProps,
  'type' | 'value' | 'defaultValue'
> & {
  id: string;
  defaultValue?: Date;
  value?: Date;
  onValueChange?: (value: Date) => void;
  className?: string;
  fromDate?: Date;
  toDate?: Date;
  datePickerProps?: DatePickerProps;
};

const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  (props, userRef) => {
    const {
      align = 'left',
      className,
      id,
      defaultValue,
      value,
      onValueChange,
      label,
      hasError = false,
      hideLabel = false,
      size = 'md',
      fromDate = subYears(new Date(), 20),
      toDate = addYears(new Date(), 20),
      datePickerProps = {},
    } = props;

    const [open, setOpen] = useState(false);
    const [fieldValue, setFieldValue] = useState<string>(
      dayToString(value || defaultValue || new Date()),
    );

    const [displayMonth, setDisplayMonth] = useState<Date>(
      stringToDay(fieldValue),
    );

    const onDatePickerSelect = (day?: Date) => {
      if (day) {
        setFieldValue(dayToString(day));
        setOpen(false);
      }
    };

    const selected = stringToDay(fieldValue);

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
      const sanitizedValue = sanitizeValue(fieldValue);

      if (!!sanitizedValue) {
        onValueChange?.(sanitizedValue);
      }
    }, [fieldValue]);

    const handleFieldOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      if (!open) {
        setOpen(true);
      }

      const string = e.currentTarget.value;
      const sanitizedValue = sanitizeValue(string);

      setFieldValue(string);

      if (!!sanitizedValue) {
        setDisplayMonth(sanitizedValue);
      }
    };

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <TextField
            align={align}
            autoComplete="off"
            className={className}
            size={size}
            id={id}
            type="text"
            label={label}
            hasError={hasError}
            hideLabel={hideLabel}
            placeholder="MM/DD/YYYY"
            value={fieldValue}
            onChange={handleFieldOnChange}
            ref={userRef}
            suffix={<Calendar width={14} height={14} />}
          />
        </Popover.Trigger>
        <Popover.Content asChild onOpenAutoFocus={(e) => e.preventDefault()}>
          <Card
            kind="elevated"
            className={css({ position: 'relative', m: '3', zIndex: '20' })}
          >
            <DatePicker
              onMonthChange={setDisplayMonth}
              month={displayMonth}
              selected={selected}
              onSelect={onDatePickerSelect}
              fromDate={fromDate}
              toDate={toDate}
              {...datePickerProps}
            />
          </Card>
        </Popover.Content>
      </Popover.Root>
    );
  },
);

DateField.displayName = 'DateField';
export { DateField };
