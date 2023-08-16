import { useTemplate } from '@components/Templates/Provider/useTemplate';
import { templateData } from '@components/Templates/index';

function TemplatesContainer() {
  const {
    templateUuids,
    templatesData,
  } = useTemplate();

  console.log('templates', templateUuids, templatesData);

  return (
    <div>
      {templateUuids.map((uuid, index) => {
        const target = templatesData[uuid];
        const TComponent: any = templateData[target.id].Template;

        return <TComponent key={index} {...target.props} />;
      })}
    </div>
  );
}

export default TemplatesContainer;
