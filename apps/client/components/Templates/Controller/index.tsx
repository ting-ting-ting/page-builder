import { ReactNode, Dispatch, SetStateAction } from 'react';
import { IconButton, Icon, cx } from '@mezzanine-ui/react';
import { ArrowDownIcon, ArrowUpIcon, DocIcon } from '@mezzanine-ui/icons';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import classes from './index.module.scss';

type ControllerProps = {
  children: ReactNode;
  uuid: string;
  setEditUuid: Dispatch<SetStateAction<string>>;
  canNotUp: boolean;
  canNotDown: boolean;
}

const Controller = ({
  children,
  uuid,
  setEditUuid,
  canNotUp,
  canNotDown,
} : ControllerProps) => {
  const {
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
      </div>
    </div>
  )
}

export default Controller;