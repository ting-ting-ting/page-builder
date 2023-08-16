import { Modal, ModalHeader, Button } from '@mezzanine-ui/react';
import { useForm } from 'react-hook-form';
import Paragraph1 from '@components/Templates/Paragraph/Paragraph1';
import FormFieldsWrapper from '@components/Form/FormFieldsWrapper';
import TextAreaField from '@components/Form/TextAreaField';
import classes from './index.module.scss';

type AddModalProps = {
  open: boolean;
  onClose: VoidFunction;
}

const AddModal = ({
  open,
  onClose,
} : AddModalProps) => {
  const methods = useForm<{
    p1: string;
    p2: string;
    p3: string;
  }>();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
      <FormFieldsWrapper
        methods={methods}
        className={classes.form}
        onSubmit={data => {
          console.log('data', data);
        }}
      >
        <ModalHeader className={classes.modalHeader}>選擇模板</ModalHeader>
        <div className={classes.modalBody}>
          <div className={classes.previewWrapper}>
            <Paragraph1 />
          </div>
          <div className={classes.fieldsWrapper}>
            <TextAreaField label="段落一" registerName="p1" />
            <TextAreaField label="段落二" registerName="p2" />
            <TextAreaField label="段落三" registerName="p3" />
          </div>
        </div>
        <div className={classes.modalFooter}>
          <Button type="button" variant="contained" size="large">關閉</Button>
          <Button type="submit" variant="contained" size="large">確定</Button>
        </div>
      </FormFieldsWrapper>
    </Modal>
  );
}

export default AddModal;