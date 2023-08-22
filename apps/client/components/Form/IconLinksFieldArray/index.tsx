import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Button, IconButton, Icon } from '@mezzanine-ui/react';
import { TrashIcon } from '@mezzanine-ui/icons';
import IconField from '@components/Form/IconField';
import InputField from '@components/Form/InputField';
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

  const onAppend = useCallback(() => {
    append({
      icon: '',
      url: '',
    });
  }, [append]);

  return (
    <div className={classes.root}>
      <div className={classes.fields}>
        {fields.map((field, index) => (
          <div key={field.id} className={classes.fieldWrapper}>
            <div>
              <IconField
                registerName={`${registerName}.${index}.icon`}
              />
            </div>
            <div className={classes.inputWrapper}>
              <InputField
                registerName={`${registerName}.${index}.url`}
                placeholder="請輸入網址"
              />
            </div>
            <IconButton
              size="large"
              onClick={() => {
                remove(index);
              }}
            >
              <Icon icon={TrashIcon} />
            </IconButton>
          </div>
        ))}
      </div>
      <Button type="button" variant="contained" size="large" className={classes.addBtn} onClick={onAppend}>
        增加
      </Button>
    </div>
  );
}

export default IconLinksFieldArray;