import { useCallback, useRef } from 'react';
import { useWatch, useFormState, useFormContext } from 'react-hook-form';
import { Icon } from '@mezzanine-ui/react';
import { PlusIcon } from '@mezzanine-ui/icons';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import classes from './index.module.scss';

export type UploadImageFieldProps = RegisteredFieldProps<HookFormFieldType> & {
  label?: string;
};

const UploadImageField = ({
  label,
  control,
  registerName,
} : UploadImageFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { control: contextControl, setValue } = useFormContext();

  const watchValue = useWatch({
    control: control || contextControl,
    name: registerName as string,
  });

  const { errors } = useFormState({ control: control || contextControl });

  const onClear = useCallback(() => {
    setValue(registerName, "", { shouldDirty: true });
  }, [registerName, setValue]);

  const onUpload = (file: File) => {
    console.log('file', file);
  };

  return (
    <div className={classes.root}>
      <button
        type="button"
        className={classes.uploadBtn}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <div className={classes.iconWrapper}>
          <Icon className={classes.icon} icon={PlusIcon} />
        </div>
        <span className={classes.text}>上傳檔案</span>
        <input
          ref={inputRef}
          accept="image/*"
          className={classes.input}
          onClick={(event) => {
            // eslint-disable-next-line no-param-reassign
            event.currentTarget.value = '';
            event.stopPropagation();
            event.nativeEvent.stopImmediatePropagation();
          }}
          onChange={(event) => {
            const { files } = event.target;

            if (files) {
              onUpload(files[0]);
            }
          }}
          type="file"
          style={{ position: 'absolute', width: 0 }}
        />
      </button>
    </div>
  );
};

export default UploadImageField;
