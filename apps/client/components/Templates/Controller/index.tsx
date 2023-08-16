import { ReactNode } from 'react';
import { IconButton, Icon } from '@mezzanine-ui/react';
import { ArrowDownIcon, ArrowUpIcon, DocIcon } from '@mezzanine-ui/icons';
import classes from './index.module.scss';

type ControllerProps = {
  children: ReactNode;
}

const Controller = ({
  children,
} : ControllerProps) => {
  return (
    <div className={classes.root}>
      {children}
      <div className={classes.controllerWrapper}>
        <IconButton type="button" size="large" className={classes.actionBtn}>
          <Icon icon={DocIcon} className={classes.icon} />
        </IconButton>
        <IconButton type="button" size="large" className={classes.actionBtn}>
          <Icon icon={ArrowUpIcon} className={classes.icon} />
        </IconButton>
        <IconButton type="button" size="large" className={classes.actionBtn}>
          <Icon icon={ArrowDownIcon} className={classes.icon} />
        </IconButton>
      </div>
    </div>
  )
}

export default Controller;