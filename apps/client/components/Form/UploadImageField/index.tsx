import { useCallback, useRef } from 'react';
import { useWatch, useFormContext } from 'react-hook-form';
import { Icon } from '@mezzanine-ui/react';
import { PlusIcon } from '@mezzanine-ui/icons';
import { readFile } from '@utils/files';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import classes from './index.module.scss';

export type UploadImageFieldProps = RegisteredFieldProps<HookFormFieldType> & {
  label?: string;
  hint?: string;
};

const UploadImageField = ({
  label,
  control,
  registerName,
  hint,
} : UploadImageFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { control: contextControl, setValue } = useFormContext();

  const watchValue = useWatch({
    control: control || contextControl,
    name: registerName as string,
  });

  const onClear = useCallback(() => {
    setValue(registerName, "", { shouldDirty: true });
  }, [registerName, setValue]);

  const onUpload = (file: File) => {
    readFile(file)
      .then(d => {
        setValue(registerName, d);
      })
      .catch(error => {
        console.error(error);
      })
  };

  return (
    <>
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
          <span className={classes.text}>上傳圖片</span>
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
      <p className={classes.hint}>{hint}</p>
    </>
  );
};

export default UploadImageField;