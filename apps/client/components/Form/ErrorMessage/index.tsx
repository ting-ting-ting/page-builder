import { Icon } from '@mezzanine-ui/react';
import { TimesCircleFilledIcon } from '@mezzanine-ui/icons';
import classes from './index.module.scss';

type ErrorMessageProps = {
  message: string;
}

const ErrorMessage = ({
  message,
} : ErrorMessageProps) => {
  return (
    <div className={classes.root}>
      <Icon icon={TimesCircleFilledIcon} />
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;