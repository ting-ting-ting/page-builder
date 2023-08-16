/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  UseFormReturn,
} from 'react-hook-form';

export interface FormFieldsWrapperProps<T extends FieldValues = FieldValues> {
  methods: UseFormReturn<T>;
  children: ReactNode;
  className?: string;
  onSubmit?: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
}

const FormFieldsWrapper = <T extends FieldValues>({
  methods,
  children,
  className,
  onSubmit = () => {},
  onInvalid = () => {},
}: FormFieldsWrapperProps<T>): JSX.Element => (
  <FormProvider {...methods}>
    <form
      onSubmit={methods.handleSubmit(onSubmit, onInvalid)}
      className={className}
    >
      {children}
    </form>
  </FormProvider>
);

export default FormFieldsWrapper;
