import Quill from 'react-quill';
import { useFormContext, useFormState, useWatch } from 'react-hook-form';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import 'quill/dist/quill.snow.css';
import classes from './index.module.scss';

export type EditorFieldProps = RegisteredFieldProps<HookFormFieldType> & {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

const EditorField = ({
  control,
  label,
  placeholder,
  defaultValue,
  registerName,
} : EditorFieldProps) => {
  const {
    control: contextControl,
    setValue,
  } = useFormContext();

  const watchValue =
    useWatch({
      control: control || contextControl,
      name: registerName as string,
      defaultValue,
    }) || "";

  const { errors } = useFormState({ control: control || contextControl });

  return (
    <div className={classes.root}>
      {label && (
        <p className={classes.label}>{label}</p>
      )}
      <Quill
        className={classes.editor}
        placeholder={placeholder}
        modules={{
          toolbar: [['bold', 'italic', 'underline', 'link']],
        }}
        onChange={value => {
          setValue(registerName, value);
        }}
        value={watchValue}
      />
    </div>
  );
};

export default EditorField;
