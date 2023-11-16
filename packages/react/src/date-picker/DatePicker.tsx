'use client';

import { forwardRef, useState } from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';
import { TextField } from '../text-field/TextField';
import { css } from '@styles/css';
import { Button } from '../button/Button';

export type DatePickerProps = DayPickerProps & {
  id: string;
};

const popperStyles = css({
  boxShadow: '0 0 24px 0px rgba(0,0,0,0.1)',
  p: '4',
  '& .react-datepicker__day': {
    w: '30px',
    textAlign: 'center',
    fontSize: '5',
    color: 'gray10'
  },
  '& .react-datepicker__week': {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const dayStyles = css({
  // display
});

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, userRef) => {
    const { id, ...rest } = props;
    const [dateValue, setDateValue] = useState<Date | null>(null);

    return <DayPicker />;
  }
);

DatePicker.displayName = 'DatePicker';
export { DatePicker };
