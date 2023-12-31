import { useMemo } from 'react';
import { Input, InputProps } from '@mezzanine-ui/react';
import { useFormContext, useFormState, useWatch } from 'react-hook-form';
import BaseField from '@components/Form/BaseField';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import classes from './index.module.scss';

export type InputFieldProps = InputProps & RegisteredFieldProps<HookFormFieldType> & {
  label?: string;
};

const InputField = ({
  clearable,
  control,
  defaultValue,
  disabled,
  label,
  placeholder = "請輸入",
  register,
  registerName,
  required,
} : InputFieldProps) => {
  const {
    control: contextControl,
    register: contextRegister,
  } = useFormContext();

  const watchValue =
    useWatch({
      control: control || contextControl,
      name: registerName as string,
      defaultValue,
    }) || "";

  const registration = useMemo(
    () =>
      (register || contextRegister)(
        registerName,
        {
          required,
          disabled,
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      ),
    [register, contextRegister, registerName, required, disabled]
  );

  const { errors } = useFormState({ control: control || contextControl });

  return (
    <BaseField
      label={label}
      name={registerName}
      errors={errors}
    >
      <Input
        fullWidth
        clearable={clearable}
        className={classes.input}
        inputProps={{
          id: registerName,
          name: registerName,
          onBlur: registration.onBlur,
        }}
        {...registration}
        onChange={registration.onChange}
        placeholder={placeholder}
        value={watchValue}
        size="large"
      />
    </BaseField>
  );
};

export default InputField;
