/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, memo, Dispatch, SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Icon, IconButton, cx } from '@mezzanine-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@mezzanine-ui/icons';
import { useForm } from 'react-hook-form';
import FormFieldsWrapper from '@components/Form/FormFieldsWrapper';
import { templateData, templateIds, TemplateCategoryIdType } from '@components/Templates/index';
import { TemplateProps } from '@components/Templates/typing';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import classes from './index.module.scss';

type FormProps = {
  targetCategoryId: TemplateCategoryIdType;
  targetIndex: number;
  setTargetIndex: Dispatch<SetStateAction<number>>;
  onClose: VoidFunction;
  editMode?: boolean;
  uuid?: string;
}

const Form = ({
  targetCategoryId,
  targetIndex,
  setTargetIndex,
  onClose,
  editMode,
  uuid,
} : FormProps) => {
  const {
    push,
    pushUnderUuid,
    edit,
    templatesDataWithUuid,
  } = useTemplate();

  const targetTemplate = useMemo(() => templateData[templateIds[targetCategoryId][targetIndex]], [targetCategoryId, targetIndex]);

  const defaultValues = useMemo(() => {
    if (editMode && uuid && templatesDataWithUuid[uuid].id === targetTemplate.id) {
      return templatesDataWithUuid[uuid].props;
    }

    return targetTemplate.defaultValues;
  }, [templatesDataWithUuid, editMode, uuid, targetTemplate]);

  const schema = useMemo((): any => targetTemplate.schema, [targetTemplate]);

  const methods = useForm<TemplateProps>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const props = methods.watch();

  const onLeft = useCallback(() => {
    if (targetIndex !== 0) {
      setTargetIndex(i => i - 1);
    }
  }, [targetIndex, setTargetIndex]);

  const onRight = useCallback(() => {
    if (targetIndex !== templateIds[targetCategoryId].length - 1) {
      setTargetIndex(i => i + 1);
    }
  }, [targetCategoryId, targetIndex, setTargetIndex]);

  return (
    <FormFieldsWrapper<TemplateProps>
      methods={methods}
      className={classes.form}
      onSubmit={(data) => {
        if (uuid) {
          if (editMode) {
            edit({
              id: targetTemplate.id,
              uuid,
              props,
            });
          } else {
            pushUnderUuid({
              id: targetTemplate.id,
              uuid,
              props: data,
            });
          }
        } else {
          push({
            id: targetTemplate.id,
            props: data,
          });
        }

        onClose();
      }}
    >
      <div className={classes.previewWrapper}>
        <IconButton
          type="button"
          size="large"
          onClick={onLeft}
          className={cx(classes.arrowBtn, classes.leftBtn)}
          disabled={targetIndex === 0}
        >
          <Icon icon={ChevronLeftIcon} />
        </IconButton>
        <div className={classes.preview}>
          {targetTemplate.Template({...(props as any)})}
        </div>
        <IconButton
          type="button"
          size="large"
          onClick={onRight}
          className={cx(classes.arrowBtn, classes.rightBtn)}
          disabled={targetIndex === templateIds[targetCategoryId].length - 1}
        >
          <Icon icon={ChevronRightIcon} />
        </IconButton>
      </div>
      <div className={classes.fieldsContainer}>
        <div className={classes.fieldsWrapper}>
          {targetTemplate.Editor()}
        </div>
      </div>
      <div className={classes.modalFooter}>
        <Button type="button" variant="contained" size="large" onClick={onClose}>關閉</Button>
        <Button type="submit" variant="contained" size="large">確定</Button>
      </div>
    </FormFieldsWrapper>
  );
}

export default memo(Form);