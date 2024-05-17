import { useState } from 'react';
import { DateField, DatePicker, Text } from '../../packages/react/src';

describe('DatePicker', () => {
  add('Default', () => {
    return <DatePicker id="datepicker" />;
  });

  add('With DateField', () => {
    return <DateField id="datepicker" />;
  });

  add('With DateField and fromDate', () => {
    return <DateField id="datepicker" fromDate={new Date(2019, 1, 1)} />;
  });

  add('With DateField and toDate', () => {
    return (
      <DateField
        id="datepicker"
        value={new Date(2015, 1, 1)}
        toDate={new Date(2019, 10, 6)}
      />
    );
  });

  add('Controlled Field', () => {
    const [value, setValue] = useState(new Date());

    return (
      <>
        <Text>Value: {value.toDateString()}</Text>
        <DateField
          id="datepicker"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
          toDate={new Date(2027, 1, 1)}
          fromDate={new Date(2019, 1, 1)}
        />
      </>
    );
  });

  add('With custom DatePicker props', () => {
    return (
      <>
        <DateField
          id="datepicker"
          toDate={new Date(2027, 1, 1)}
          fromDate={new Date(2019, 1, 1)}
          datePickerProps={{
            disabled: { dayOfWeek: [0, 6] },
          }}
        />
      </>
    );
  });
});
