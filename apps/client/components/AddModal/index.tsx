import { useMemo } from 'react';
import { Modal, ModalHeader, Button } from '@mezzanine-ui/react';
import { useForm } from 'react-hook-form';
// import Paragraph1 from '@components/Templates/Paragraph/Paragraph1/Template';
import FormFieldsWrapper from '@components/Form/FormFieldsWrapper';
// import Paragraph1Editor from '@components/Templates/Paragraph/Paragraph1/Editor';
import { templateData, ids } from '@components/Templates/index';
import classes from './index.module.scss';

type AddModalProps = {
  open: boolean;
  onClose: VoidFunction;
}

const targetId = ids[0];

const AddModal = ({
  open,
  onClose,
} : AddModalProps) => {
  const methods = useForm();

  const target = useMemo(() => templateData[targetId], []);
  const props = methods.watch();

  console.log('templateData', target, props)

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
           {target.Template({...props})}
          </div>
          <div className={classes.fieldsWrapper}>
            {target.Editor()}
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