import { useMemo, useState } from 'react';
import { Modal, ModalHeader, Button, Icon, IconButton, cx } from '@mezzanine-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@mezzanine-ui/icons';
import { useForm } from 'react-hook-form';
import FormFieldsWrapper from '@components/Form/FormFieldsWrapper';
import { templateData, templateIds } from '@components/Templates/index';
import { TemplateProps } from '@components/Templates/typing';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import classes from './index.module.scss';

type AddModalProps = {
  open: boolean;
  onClose: VoidFunction;
}

const AddModal = ({
  open,
  onClose,
} : AddModalProps) => {
  const {
    push,
  } = useTemplate();
  const [targetIndex] = useState<number>(0);
  const methods = useForm<TemplateProps>();

  const targetTemplate = useMemo(() => templateData[templateIds[targetIndex]], [targetIndex]);
  const props = methods.watch();

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
          push({
            id: targetTemplate.id,
            props: data,
          });
          onClose();
        }}
      >
        <ModalHeader className={classes.modalHeader}>選擇模板</ModalHeader>
        <div className={classes.modalBody}>
          <div className={classes.previewWrapper}>
            <IconButton size="large" className={cx(classes.arrowBtn, classes.leftBtn)}>
              <Icon icon={ChevronLeftIcon} />
            </IconButton>
            <div className={classes.preview}>
              {targetTemplate.Template({...props})}
            </div>
            <IconButton size="large" className={cx(classes.arrowBtn, classes.rightBtn)}>
              <Icon icon={ChevronRightIcon} />
            </IconButton>
          </div>
          <div className={classes.fieldsWrapper}>
            {targetTemplate.Editor()}
          </div>
        </div>
        <div className={classes.modalFooter}>
          <Button type="button" variant="contained" size="large" onClick={onClose}>關閉</Button>
          <Button type="submit" variant="contained" size="large">確定</Button>
        </div>
      </FormFieldsWrapper>
    </Modal>
  );
}

export default AddModal;