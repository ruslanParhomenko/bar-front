import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

const Form = (props) => {
  const { id, form, children, onSubmit } = props;

  const { handleSubmit, getValues } = form;

  const handleSubmitWithCopy = (data) => {
    const safeData = { ...getValues(), ...data };
    onSubmit?.(safeData);
  };

  return (
    <FormProvider {...form}>
      <form id={id} onSubmit={onSubmit ? handleSubmit(handleSubmitWithCopy) : undefined}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
