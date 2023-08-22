import { memo, ReactNode } from 'react';
import { FieldErrors } from 'react-hook-form';
import { cx, FormField, FormLabel, FormMessage } from '@mezzanine-ui/react';
import { ErrorMessage as HookformErrorMessage } from '@hookform/error-message';
import ErrorMessage from '@components/Form/ErrorMessage';
import classes from './index.module.scss';

export interface BaseFieldProps {
  children: ReactNode;
  name: string;
  label?: string;
  errors?: FieldErrors<any>;
}

const BaseField = ({
  children,
  label,
  name,
  errors,
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
    <HookformErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <ErrorMessage message={message} />
      )}
    />
  </div>
);

export default memo(BaseField);
