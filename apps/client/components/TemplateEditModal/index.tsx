import { useState, useCallback, useEffect, useMemo } from 'react';
import { Modal, Select, Option, cx } from '@mezzanine-ui/react';
import { templateCategories, TemplateCategoryIdType, templateIds, templateData } from '@components/Templates';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
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
  const {
    templatesData,
  } = useTemplate();

  const [targetCategoryId, setTargetCategoryId] = useState<TemplateCategoryIdType>(templateCategories[0].id);
  const [targetIndex, setTargetIndex] = useState<number>(0);

  const targetCategory = useMemo(() => templateCategories.find(c => c.id === targetCategoryId) ?? null, [targetCategoryId]);

  const targetIds = useMemo(() => templateIds[targetCategoryId], [targetCategoryId]);

  const onChangeCategory = useCallback((categoryId: TemplateCategoryIdType) => {
    setTargetCategoryId(categoryId);
    setTargetIndex(0);
  }, []);

  const targetUuidTemplate = useMemo(() => {
    if (editMode && uuid) {
      return templateData[templatesData[uuid].id];
    }
    return null;
  }, [editMode, uuid, templatesData]);

  useEffect(() => {
    if (targetUuidTemplate && open) {
      const uuidCategoryId = targetUuidTemplate.category;
      const uuidIndex = templateIds[uuidCategoryId].findIndex(id => id === targetUuidTemplate.id);

      setTargetCategoryId(uuidCategoryId);
      setTargetIndex(uuidIndex);
    }
  }, [targetUuidTemplate, open]);

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
            onChangeCategory(op.id as TemplateCategoryIdType);
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
      <div className={classes.previewBtnContainer}>
        <div className={classes.previewBtnWrapper}>
          {targetIds.map((id, index) => {
            const PreviewComponent = templateData[id].Preview;

            return (
              <div
                key={id}
                className={cx(classes.previewBtn, {
                  [classes.active]: index === targetIndex,
                })}
                onClick={() => {
                  setTargetIndex(index);
                }}
              >
                <PreviewComponent/>
              </div>
            );
          })}
        </div>
      </div>
      <Form
        key={`${targetCategoryId}-${targetIndex}-${uuid ?? 'create'}`}
        targetCategoryId={targetCategoryId}
        targetIndex={targetIndex}
        setTargetIndex={setTargetIndex}
        onClose={onClose}
        uuid={uuid}
        editMode={editMode}
      />
    </Modal>
  );
}

export default TemplateEditModal;