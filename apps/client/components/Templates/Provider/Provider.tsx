import { useCallback, useState, ReactNode } from 'react';
import { TemplateContextProvider } from './Context';
import { TemplateIdEnum } from '../enum';
import { TemplateProps } from '../typing';

const TemplateProvider = ({ children } : { children: ReactNode }) => {
  const [templates, setTemplates] = useState<{
    id: TemplateIdEnum;
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
