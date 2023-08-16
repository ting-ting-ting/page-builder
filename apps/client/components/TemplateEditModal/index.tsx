import { Modal } from '@mezzanine-ui/react';
import Form from './Form';
import classes from './index.module.scss';

type TemplateEditModalProps = {
  open: boolean;
  onClose: VoidFunction;
  editMode?: boolean;
  uuid?: string;
}

const TemplateEditModal = ({
  open,
  onClose,
  editMode,
  uuid,
} : TemplateEditModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
      <Form onClose={onClose} uuid={uuid} editMode={editMode} />
    </Modal>
  );
}

export default TemplateEditModal;