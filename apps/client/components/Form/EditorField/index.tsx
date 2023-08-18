import { useMemo } from 'react';
import Quill from 'react-quill';
import { useFormContext, useFormState, useWatch } from 'react-hook-form';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import 'quill/dist/quill.snow.css';
import classes from './index.module.scss';

export type EditorFieldProps = RegisteredFieldProps<HookFormFieldType> & {
  label?: string;
  defaultValue?: string;
};

const EditorField = ({
  control,
  label,
  defaultValue,
  register,
  registerName,
} : EditorFieldProps) => {
  const {
    control: contextControl,
    setValue,
    register: contextRegister,
  } = useFormContext();

  const watchValue =
    useWatch({
      control: control || contextControl,
      name: registerName as string,
      defaultValue,
    }) || "";

  const { errors } = useFormState({ control: control || contextControl });

  const registration = useMemo(
    () =>
      (register || contextRegister)(
        registerName,
      ),
    [register, contextRegister, registerName]
  );

  return (
    <div className={classes.root}>
      {label && (
        <p className={classes.label}>{label}</p>
      )}
      <Quill
        className={classes.editor}
        onChange={value => {
          setValue(registerName, value);
        }}
        value={watchValue}
      />
    </div>
  );
};

export default EditorField;
