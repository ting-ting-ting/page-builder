import { useMemo } from 'react';
import { Input, InputProps } from '@mezzanine-ui/react';
import { useFormContext, useWatch } from 'react-hook-form';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import classes from './index.module.scss';

export type IconFieldProps = InputProps & RegisteredFieldProps<HookFormFieldType> & {
  label?: string;
};

const IconField = ({
  clearable,
  control,
  defaultValue,
  disabled,
  label,
  register,
  registerName,
  required,
  style,
} : IconFieldProps) => {
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

  return (
    <div className={classes.root}>
      {label && (
        <p className={classes.label}>{label}</p>
      )}
      <div className={classes.fieldsWrapper}>
        <div className={classes.iconSelector}>

        </div>
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
          placeholder="請輸入網址"
          size="large"
          value={watchValue}
        />
      </div>
    </div>
  );
};

export default IconField;
