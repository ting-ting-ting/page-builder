import { useTemplate } from '@components/Templates/Provider/useTemplate';
import { templateData } from '@components/Templates/index';
import Controller from './Controller';

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

        return (
          <Controller key={index} uuid={uuid}>
            <TComponent {...target.props} />
          </Controller>
        );
      })}
    </div>
  );
}

export default TemplatesContainer;
