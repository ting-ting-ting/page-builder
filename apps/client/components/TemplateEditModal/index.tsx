import { useCallback, useMemo, useState, memo } from 'react';
import { Modal, ModalHeader, Button, Icon, IconButton, cx } from '@mezzanine-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@mezzanine-ui/icons';
import { useForm } from 'react-hook-form';
import FormFieldsWrapper from '@components/Form/FormFieldsWrapper';
import { templateData, templateIds } from '@components/Templates/index';
import { TemplateProps } from '@components/Templates/typing';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import classes from './index.module.scss';

type TemplateEditModalProps = {
  open: boolean;
  onClose: VoidFunction;
  uuid?: string;
}

const TemplateEditModal = ({
  open,
  onClose,
  uuid,
} : TemplateEditModalProps) => {
  const {
    push,
    templatesData,
  } = useTemplate();
  const editMode = useMemo(() => !!uuid, [uuid]);

  const [targetIndex, setTargetIndex] = useState<number>(0);

  const methods = useForm<TemplateProps>({
    defaultValues: uuid ? templatesData[uuid].props : undefined,
  });

  const targetTemplate = useMemo(() => {
    if (uuid) {
      return templateData[templatesData[uuid].id];
    }
    return templateData[templateIds[targetIndex]];
  }, [uuid, templatesData, targetIndex]);

  const props = methods.watch();

  const onLeft = useCallback(() => {
    if (targetIndex !== 0) {
      setTargetIndex(i => i - 1);
    }
  }, [targetIndex]);

  const onRight = useCallback(() => {
    if (targetIndex !== templateIds.length - 1) {
      setTargetIndex(i => i + 1);
    }
  }, [targetIndex]);

  console.log('templatesData', templatesData)

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
      <FormFieldsWrapper<TemplateProps>
        methods={methods}
        className={classes.form}
        onSubmit={(data) => {
          if (editMode) {
            console.log('edit!')
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
    </Modal>
  );
}

export default memo(TemplateEditModal);