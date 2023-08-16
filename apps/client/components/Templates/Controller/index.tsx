import { ReactNode, Dispatch, SetStateAction } from 'react';
import { IconButton, Icon, cx } from '@mezzanine-ui/react';
import { ArrowDownIcon, ArrowUpIcon, DocIcon, TrashIcon, PlusIcon } from '@mezzanine-ui/icons';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import classes from './index.module.scss';

type ControllerProps = {
  children: ReactNode;
  uuid: string;
  setEditUuid: Dispatch<SetStateAction<string>>;
  setPushUuid: Dispatch<SetStateAction<string>>;
  canNotUp: boolean;
  canNotDown: boolean;
}

const Controller = ({
  children,
  uuid,
  setEditUuid,
  setPushUuid,
  canNotUp,
  canNotDown,
} : ControllerProps) => {
  const {
    remove,
    onUp,
    onDown,
  } = useTemplate();

  return (
    <div className={classes.root}>
      {children}
      <div className={classes.controllerWrapper}>
        <IconButton
          type="button"
          size="large"
          className={classes.actionBtn}
          onClick={() => {
            setEditUuid(uuid);
          }}
        >
          <Icon icon={DocIcon} className={classes.icon} />
        </IconButton>
        <IconButton
          type="button"
          size="large"
          className={cx(classes.actionBtn, {
            [classes.disabled]: canNotUp,
          })}
          onClick={() => {
            onUp(uuid);
          }}
          disabled={canNotUp}
        >
          <Icon icon={ArrowUpIcon} className={classes.icon} />
        </IconButton>
        <IconButton
          type="button"
          size="large"
          className={cx(classes.actionBtn, {
            [classes.disabled]: canNotDown,
          })}
          onClick={() => {
            onDown(uuid);
          }}
          disabled={canNotDown}
        >
          <Icon icon={ArrowDownIcon} className={classes.icon} />
        </IconButton>
        <IconButton
          type="button"
          size="large"
          className={classes.actionBtn}
          onClick={() => {
            remove(uuid);
          }}
        >
          <Icon icon={TrashIcon} className={classes.icon} />
        </IconButton>
      </div>
      <div className={classes.plusWrapper}>
        <IconButton
          type="button"
          onClick={() => {
            setPushUuid(uuid);
          }}
          className={classes.plusBtn}
        >
          <Icon icon={PlusIcon} className={classes.plusIcon} />
        </IconButton>
      </div>
    </div>
  )
}

export default Controller;