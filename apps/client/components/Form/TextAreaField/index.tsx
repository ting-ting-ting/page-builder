import { useMemo } from 'react';
import { Textarea, TextareaProps } from '@mezzanine-ui/react';
import { useFormContext, useWatch } from 'react-hook-form';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import classes from './index.module.scss';

export type TextAreaFieldProps = TextareaProps & RegisteredFieldProps<HookFormFieldType> & {
  label?: string;
};

const TextAreaField = ({
  clearable,
  control,
  defaultValue,
  disabled,
  label,
  maxLength,
  placeholder = "請輸入",
  register,
  registerName,
  required,
  style,
} : TextAreaFieldProps) => {
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
          maxLength,
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      ),
    [register, contextRegister, registerName, required, disabled, maxLength]
  );

  return (
    <div className={classes.root}>
      {label && (
        <p className={classes.label}>{label}</p>
      )}
      <Textarea
        fullWidth
        clearable={clearable}
        maxLength={maxLength}
        className={classes.textarea}
        textareaProps={{
          id: registerName,
          name: registerName,
          onBlur: registration.onBlur,
        }}
        {...registration}
        onChange={registration.onChange}
        placeholder={placeholder}
        value={watchValue}
      />
    </div>
  );
};

export default TextAreaField;
