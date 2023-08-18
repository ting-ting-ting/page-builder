/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-css-tags */
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
      const html = renderToString(
        <html>
          <head>
            <link rel="stylesheet" type="text/css" href="./all.css" />
          </head>
          <body>
            <div>{components}</div>
          </body>
        </html>
      );

      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const tempEl = document.createElement("a");
      document.body.appendChild(tempEl);
      tempEl.href = url;
      tempEl.download = "thispage.html";
      tempEl.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
        tempEl.parentNode?.removeChild(tempEl);
      }, 2000);
    }
  }

  return (
    <button type="button" onClick={get}>get</button>
  );
}

export default GetHtmlButton;