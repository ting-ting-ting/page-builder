/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { templateData } from '@components/Templates/index';
import { useTemplate } from '@components/Templates/Provider/useTemplate';

function TemplatePreview() {
  const {
    templateUuids,
    templatesDataWithUuid,
  } = useTemplate();

  useEffect(() => {
    if (templateUuids.length === 0) {
      const link = document.createElement('a');
      link.href = '/page-builder';
      document.body.appendChild(link);
      link.click();
    }
  }, [templateUuids]);

  return (
    <div>
      {templateUuids.map((uuid) => {
        const target = templatesDataWithUuid[uuid];
        const TComponent: any = templateData[target.id].Template;

        return (
          <TComponent key={uuid} {...target.props} />
        );
      })}
    </div>
  );
}

export default TemplatePreview;