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