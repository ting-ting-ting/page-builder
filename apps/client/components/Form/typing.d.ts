import {
  Control,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export type HookFormFieldType<T extends FieldValues = FieldValues> = T;

export interface RegisteredFieldProps<Type = FieldValues> {
  register?: UseFormRegister<Type>;
  control?: Control<any>;
  registerName: Path<Type>;
  name?: string;
}