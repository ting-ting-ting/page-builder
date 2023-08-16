import { useTemplate } from '@components/Templates/Provider/useTemplate';
import { templateData } from '@components/Templates/index';

function TemplatesContainer() {
  const {
    templates,
  } = useTemplate();

  console.log('templates', templates);

  return (
    <div>
      {templates.map((t, index) => {
        const TComponent = templateData[t.id].Template;

        return <TComponent key={index} {...t.props} />;
      })}
    </div>
  );
}

export default TemplatesContainer;
