import { Modal, ModalHeader, ModalBody } from '@mezzanine-ui/react';
import Paragraph1 from '@components/Templates/Paragraph/Paragraph1';
import classes from './index.module.scss';

type AddModalProps = {
  open: boolean;
  onClose: VoidFunction;
}

const AddModal = ({
  open,
  onClose,
} : AddModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
      <ModalHeader>選擇模板</ModalHeader>
      <div className={classes.modalBody}>
        <div className={classes.previewWrapper}>
          <Paragraph1 />
        </div>
      </div>
    </Modal>
  );
}

export default AddModal;