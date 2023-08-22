import { useState, useMemo, useRef } from 'react';
import { get } from 'lodash';
import { useClickAway, cx } from '@mezzanine-ui/react';
import { useFormContext, useWatch, useFormState } from 'react-hook-form';
import Menu from '@components/Menu';
import { useIcons } from '@components/IconsProvider/useIcons';
import { RegisteredFieldProps, HookFormFieldType } from '../typing';
import classes from './index.module.scss';

export type IconFieldProps =  RegisteredFieldProps<HookFormFieldType>

const IconField = ({
  control,
  registerName,
} : IconFieldProps) => {
  const { icons, getIcon } = useIcons();
  const [open, setOpen] = useState<boolean>(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  useClickAway(
    () => {
      if (!open) return;

      return () => {
        setOpen(false);
      };
    },
    nodeRef,
    [
      nodeRef,
      open,
      setOpen,
    ],
  );

  const {
    control: contextControl,
    setValue,
  } = useFormContext();

  const { errors } = useFormState({ control: control || contextControl });
  const haveError = useMemo(() => !!get(errors, registerName), [errors, registerName]);

  const watchValue =
    useWatch({
      control: control || contextControl,
      name: registerName as string,
    }) || '';

  return (
    <div className={classes.root}>
      <div ref={nodeRef}>
        <div
          className={cx(classes.iconSelector, {
            [classes.error]: haveError,
          })}
          ref={controlRef}
          onClick={() => {
            setOpen(s => !s);
          }}
        >
          {watchValue ? (
            <div className={classes.iconValue}>
              {getIcon(watchValue, classes.icon)}
            </div>
          ) : (
            <span className={classes.iconPlaceholder}>Icon</span>
          )}
        </div>
        <Menu
          disablePortal
          open={open}
          controlRef={controlRef}
        >
          <div className={classes.iconsWrapper}>
            {icons.map(icon => (
              <div
                key={icon.id}
                className={classes.iconBtn}
                onClick={() => {
                  setValue(registerName, icon.id);
                }}
              >
                {icon.icon}
              </div>
            ))}
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default IconField;
