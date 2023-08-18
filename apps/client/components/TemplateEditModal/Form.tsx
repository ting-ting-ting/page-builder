import { useCallback, useMemo, useState, memo, Dispatch, SetStateAction } from 'react';
import { ModalHeader, Button, Icon, IconButton, cx } from '@mezzanine-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@mezzanine-ui/icons';
import { useForm } from 'react-hook-form';
import FormFieldsWrapper from '@components/Form/FormFieldsWrapper';
import { templateData, templateIds } from '@components/Templates/index';
import { TemplateProps } from '@components/Templates/typing';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import classes from './index.module.scss';

type FormProps = {
  targetIndex: number;
  setTargetIndex: Dispatch<SetStateAction<number>>;
  onClose: VoidFunction;
  editMode?: boolean;
  uuid?: string;
}

const Form = ({
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
    templatesData,
  } = useTemplate();

  const targetTemplate = useMemo(() => {
    if (editMode && uuid) {
      return templateData[templatesData[uuid].id];
    }
    return templateData[templateIds[targetIndex]];
  }, [editMode, uuid, templatesData, targetIndex]);

  const defaultValues = useMemo(() => (editMode && uuid) ? templatesData[uuid].props : targetTemplate.defaultValues, [templatesData, editMode, uuid, targetTemplate]);

  const methods = useForm<TemplateProps>({
    defaultValues,
  });

  const props = methods.watch();

  const onLeft = useCallback(() => {
    if (targetIndex !== 0) {
      setTargetIndex(i => i - 1);
    }
  }, [targetIndex, setTargetIndex]);

  const onRight = useCallback(() => {
    if (targetIndex !== templateIds.length - 1) {
      setTargetIndex(i => i + 1);
    }
  }, [targetIndex, setTargetIndex]);

  return (
    <FormFieldsWrapper<TemplateProps>
      methods={methods}
      className={classes.form}
      onSubmit={(data) => {
        if (uuid) {
          if (editMode) {
            edit({
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
      <ModalHeader className={classes.modalHeader}>選擇模板</ModalHeader>
      <div className={classes.previewWrapper}>
        {!editMode && (
          <IconButton
            type="button"
            size="large"
            onClick={onLeft}
            className={cx(classes.arrowBtn, classes.leftBtn)}
            disabled={targetIndex === 0}
          >
            <Icon icon={ChevronLeftIcon} />
          </IconButton>
        )}
        <div className={classes.preview}>
          {targetTemplate.Template({...(props as any)})}
        </div>
        {!editMode && (
          <IconButton
            type="button"
            size="large"
            onClick={onRight}
            className={cx(classes.arrowBtn, classes.rightBtn)}
            disabled={targetIndex === templateIds.length - 1}
          >
            <Icon icon={ChevronRightIcon} />
          </IconButton>
        )}
      </div>
      <div className={classes.fieldsWrapper}>
        {targetTemplate.Editor()}
      </div>
      <div className={classes.modalFooter}>
        <Button type="button" variant="contained" size="large" onClick={onClose}>關閉</Button>
        <Button type="submit" variant="contained" size="large">確定</Button>
      </div>
    </FormFieldsWrapper>
  );
}

export default memo(Form);