import { renderToString } from 'react-dom/server';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import { templateData } from '@components/Templates/index';
import classes from './index.module.scss';

const GetHtmlButton = () => {
  const {
    templateUuids,
    templatesDataWithUuid,
  } = useTemplate();

  const get = () => {
    if (typeof document !== undefined) {
      const components = templateUuids.map((uuid, index) => {
        const target = templatesDataWithUuid[uuid];
        const TComponent: any = templateData[target.id].Template;

        return (
          <TComponent key={index} {...target.props} />
        );
      });
      const html = renderToString(<div>{components}</div>);

      console.log('html', html)
    }
  }

  return (
    <button type="button" onClick={get}>get</button>
  );
}

export default GetHtmlButton;