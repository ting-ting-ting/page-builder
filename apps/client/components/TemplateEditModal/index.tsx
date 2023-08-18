import { useState } from 'react';
import { Modal, ModalHeader } from '@mezzanine-ui/react';
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
  const [targetIndex, setTargetIndex] = useState<number>(0);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
      <ModalHeader className={classes.modalHeader}>選擇模板</ModalHeader>
      <Form
        key={`${targetIndex}-${uuid ?? 'create'}`}
        onClose={onClose}
        uuid={uuid}
        editMode={editMode}
        targetIndex={targetIndex}
        setTargetIndex={setTargetIndex}
      />
    </Modal>
  );
}

export default TemplateEditModal;