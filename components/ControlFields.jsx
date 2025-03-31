'use client';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import {
  Control,
  Controller,
  Field,
  FieldValues,
  RegisterOptions,
  useFormContext
} from 'react-hook-form';

const SelectInput = ({
  fieldLabel,
  fieldName,
  disabled = false,
  multiple = false,
  variant = 'outlined',
  options = [],
  defaultValue,
  additionalOnChange = () => null
}) => {
  const { control: ctxControl } = useFormContext();
  return (
    <Controller
      name={fieldName}
      control={ctxControl}
      defaultValue={defaultValue ?? ''}
      render={({ field, fieldState: { error, invalid } }) => (
        <FormControl fullWidth variant={variant} key={field.value || ''}>
          <InputLabel>{fieldLabel}</InputLabel>

          <Select
            {...field}
            value={field.value ?? ''}
            label={fieldLabel}
            disabled={disabled}
            multiple={multiple}
            error={invalid}
            size='small' // Добавляем проп size="small"
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value);
              const selectedOption = value ? options.find((el) => el.value === value) : null;
              additionalOnChange(selectedOption);
            }}
          >
            {options.map((option, index) => {
              return (
                <MenuItem key={`${option.value}-${index}`} value={option.value}>
                  <Typography noWrap>{option.label}</Typography>
                </MenuItem>
              );
            })}
          </Select>

          {error?.message && invalid && <FormHelperText error>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default SelectInput;
