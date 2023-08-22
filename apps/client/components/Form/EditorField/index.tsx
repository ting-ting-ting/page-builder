import Quill from 'react-quill';
import { useFormContext, useWatch } from 'react-hook-form';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import BaseField from '@components/Form/BaseField';
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

  return (
    <BaseField
      label={label}
      name={registerName}
    >
      <Quill
        className={classes.editor}
        placeholder={placeholder}
        modules={{
          toolbar: [['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }]],
          clipboard: {
            matchVisual: false,
          },
          history: {
            maxStack: 0,
          },
        }}
        onChange={value => {
          setValue(registerName, value);
        }}
        value={watchValue}
      />
    </BaseField>
  );
};

export default EditorField;
