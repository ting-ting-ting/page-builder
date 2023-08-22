import { useFieldArray, useFormContext } from 'react-hook-form';
import IconField from '@components/Form/IconField';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import classes from './index.module.scss';

export type IconLinksFieldArrayProps =  RegisteredFieldProps<HookFormFieldType>;

const IconLinksFieldArray = ({
  registerName,
} : IconLinksFieldArrayProps) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <IconField
            registerName={`${registerName}.${index}.icon`}
          />
        </div>
      ))}
    </div>
  );
}

export default IconLinksFieldArray;