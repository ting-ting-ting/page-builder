/* eslint-disable @typescript-eslint/no-explicit-any */
import { templateData } from '@components/Templates/index';
import { useTemplate } from '@components/Templates/Provider/useTemplate';

function TemplatePreview() {
  const {
    templateUuids,
    templatesDataWithUuid,
  } = useTemplate();

  return (
    <div>
      {templateUuids.map((uuid, index) => {
        const target = templatesDataWithUuid[uuid];
        const TComponent: any = templateData[target.id].Template;

        return (
          <TComponent key={index} {...target.props} />
        );
      })}
    </div>
  );
}

export default TemplatePreview;