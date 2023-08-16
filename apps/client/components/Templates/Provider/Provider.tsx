import { useCallback, useState, ReactNode } from 'react';
import moment from 'moment';
import { uniqueId } from 'lodash';
import { TemplateContextProvider } from './Context';
import { TemplateIdEnum } from '../enum';
import { TemplateProps } from '../typing';

const TemplateProvider = ({ children } : { children: ReactNode }) => {
  const [templates, setTemplates] = useState<{
    id: TemplateIdEnum;
    uid: string;
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
        uid: uniqueId(`${moment().valueOf()}-`),
        props,
      },
    ]);
  }, []);

  return (
    <TemplateContextProvider
      value={{
        push,
        templates,
      }}
    >
      {children}
    </TemplateContextProvider>
  );
};

export default TemplateProvider;
