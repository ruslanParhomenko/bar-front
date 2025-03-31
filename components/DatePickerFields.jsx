'use client';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';

const DatePickerInput = ({ fieldName, fieldLabel, disabled, defaultDate = null }) => {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ro'}>
        <Controller
          name={fieldName}
          control={control}
          defaultValue={defaultDate ?? null}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              disabled={disabled}
              inputRef={field.ref}
              openTo={'day'}
              format={'DD.MM.YYYY'}
              label={fieldLabel}
              value={field.value ?? null}
              onChange={field.onChange}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  error: !!error,
                  helperText: error?.message,
                  sx: {
                    '& .MuiInputBase-root': {
                      height: 40, // Реальная высота поля ввода
                      padding: '6px 12px'
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: 0,
                      height: 'auto'
                    }
                  }
                }
              }}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default DatePickerInput;
