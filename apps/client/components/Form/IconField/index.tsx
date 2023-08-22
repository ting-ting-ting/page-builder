import { useState, useRef } from 'react';
import { useClickAway } from '@mezzanine-ui/react';
import { useFormContext, useWatch } from 'react-hook-form';
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

  const watchValue =
    useWatch({
      control: control || contextControl,
      name: registerName as string,
    }) || '';

  return (
    <div className={classes.root}>
      <div ref={nodeRef}>
        <div
          className={classes.iconSelector}
          ref={controlRef}
          onClick={() => {
            setOpen(s => !s);
          }}
        >
          {watchValue ? (
            <div className={classes.iconValue}>
              {getIcon(watchValue)}
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
