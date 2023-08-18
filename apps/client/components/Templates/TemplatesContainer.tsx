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
    templatesDataWithUuid,
  } = useTemplate();

  const [editUuid, setEditUuid] = useState<string>('');
  const [pushUuid, setPushUuid] = useState<string>('');

  const onEditClose = useCallback(() => {
    setEditUuid('');
  }, []);

  const onPushClose = useCallback(() => {
    setPushUuid('');
  }, []);

  return (
    <>
      <div>
        {templateUuids.map((uuid, index) => {
          const target = templatesDataWithUuid[uuid];
          const TComponent: any = templateData[target.id].Template;

          return (
            <Controller
              key={index}
              uuid={uuid}
              setEditUuid={setEditUuid}
              setPushUuid={setPushUuid}
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
        onClose={onEditClose}
        uuid={editUuid}
        editMode
      />
      <TemplateEditModal
        open={!!pushUuid}
        onClose={onPushClose}
        uuid={pushUuid}
      />
    </>
  );
}

export default TemplatesContainer;
