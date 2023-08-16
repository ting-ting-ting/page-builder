import { Modal, ModalHeader, ModalBody } from '@mezzanine-ui/react';
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
    >
      <ModalHeader>HHH</ModalHeader>
      <ModalBody>123</ModalBody>
    </Modal>
  );
}

export default AddModal;