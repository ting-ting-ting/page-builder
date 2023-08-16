import { memo } from 'react';
import { Modal } from '@mezzanine-ui/react';
import Form from './Form';
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
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
      <Form onClose={onClose} uuid={uuid} />
    </Modal>
  );
}

export default memo(TemplateEditModal);