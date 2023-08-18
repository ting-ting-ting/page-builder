import { useState, useMemo } from 'react';
import { Modal, Select, Option } from '@mezzanine-ui/react';
import { templateCategories } from '@components/Templates';
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
  const [targetCategoryId, setTargetCategoryId] = useState<string>(templateCategories[0].id);
  const [targetIndex, setTargetIndex] = useState<number>(0);

  const targetCategory = useMemo(() => templateCategories.find(c => c.id === targetCategoryId) ?? null, [targetCategoryId]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.root}
      direction="left"
    >
      <div className={classes.modalHeader}>
        <span className={classes.modalTitle}>選擇模板</span>
        <Select
          onChange={(op) => {
            setTargetCategoryId(op.id);
          }}
          value={targetCategory}
        >
          {templateCategories?.map((option) => (
            <Option key={option.id} value={option.id}>
              {option.name}
            </Option>
          ))}
        </Select>
      </div>
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