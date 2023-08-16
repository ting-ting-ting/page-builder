import { useCallback, useState, useMemo, ReactNode } from 'react';
import moment from 'moment';
import { uniqueId } from 'lodash';
import { TemplateContextProvider } from './Context';
import { TemplateIdEnum } from '../enum';
import { TemplateProps } from '../typing';

const TemplateProvider = ({ children } : { children: ReactNode }) => {
  const [templates, setTemplates] = useState<{
    id: TemplateIdEnum;
    uuid: string;
    props: TemplateProps;
  }[]>([]);

  const push = useCallback(({
    id,
    props
  } : {
    id: TemplateIdEnum;
    props: TemplateProps;
  }) => {
    setTemplates(prevState => [
      ...prevState,
      {
        id,
        uuid: uniqueId(`${moment().valueOf()}-`),
        props,
      },
    ]);
  }, []);

  const templateUuids = useMemo(() => templates.map(t => t.uuid), [templates]);
  const templatesData = useMemo(() => templates.reduce((prev, curr) => ({
    ...prev,
    [curr.uuid]: curr,
  }), {}), [templates]);

  return (
    <TemplateContextProvider
      value={{
        push,
        templateUuids,
        templatesData,
      }}
    >
      {children}
    </TemplateContextProvider>
  );
};

export default TemplateProvider;
