import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import { templateData } from '@components/Templates/index';
import Controller from './Controller';

const TemplateEditModal = dynamic(() => import('@components/TemplateEditModal'), {
  ssr: false,
});

function TemplatesContainer() {
  const {
    templateUuids,
    templatesData,
  } = useTemplate();

  const [editUuid, setEditUuid] = useState<string>('');

  const onClose = useCallback(() => {
    setEditUuid('');
  }, [])

  console.log('templates', templateUuids, templatesData);
  console.log('editUuid', editUuid)

  return (
    <>
      <div>
        {templateUuids.map((uuid, index) => {
          const target = templatesData[uuid];
          const TComponent: any = templateData[target.id].Template;

          return (
            <Controller
              key={index}
              uuid={uuid}
              setEditUuid={setEditUuid}
              canNotUp={index === 0}
              canNotDown={index === templateUuids.length - 1}
            >
              <TComponent {...target.props} />
            </Controller>
          );
        })}
      </div>
      <TemplateEditModal
        open={!!editUuid}
        onClose={onClose}
        uuid={editUuid}
        editMode
      />
    </>
  );
}

export default TemplatesContainer;
