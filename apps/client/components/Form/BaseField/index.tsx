import { memo, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { cx, FormField, FormLabel, FormMessage } from '@mezzanine-ui/react';
// import { ErrorMessage } from '@hookform/error-message';

import classes from './index.module.scss';

export interface BaseFieldProps {
  children: ReactNode;
  name: string;
  label?: string;
}

const BaseField = ({
  children,
  label,
  name,
}: BaseFieldProps) => (
  <div className={classes.root}>
    {!!label && (
      <p
        className={cx(
          classes.label,
        )}
      >
        {label}
      </p>
    )}
    <div className={cx(classes.field)}>{children}</div>
    {/* {!disabledErrMsg && (
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <div>
            <ErrorIcon />
            <span>
              {message}
            </span>
          </div>
        )}
      />
    )} */}
  </div>
);

export default memo(BaseField);
