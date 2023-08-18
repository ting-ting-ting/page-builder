import { useState } from 'react';
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
  const [targetIndex, setTargetIndex] = useState<number>(0);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
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