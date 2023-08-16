import { useCallback, useState, useEffect, ReactNode } from 'react';
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
  const [templateUuids, setTemplateUuids] = useState<string[]>([]);
  const [templatesData, setTemplatesData] = useState<{
    [uuid: string]: {
      id: TemplateIdEnum;
      uuid: string;
      props: TemplateProps;
    }
  }>({});

  useEffect(() => {
    const newTemplateUuids = templates.map(t => t.uuid);
    const templatesData = templates.reduce((prev, curr) => ({
      ...prev,
      [curr.uuid]: curr,
    }), {})

    setTemplateUuids(newTemplateUuids);
    setTemplatesData(templatesData);
  }, [templates]);

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

  const edit = useCallback(({
    uuid,
    props
  } : {
    uuid: string;
    props: TemplateProps;
  }) => {
    setTemplatesData(prevState => ({
      ...prevState,
      [uuid]: {
        ...prevState[uuid],
        props,
      },
    }));
  }, []);

  const onUp = useCallback((uuid: string) => {
    setTemplateUuids(prevArray => {
      const currentIndex = prevArray.findIndex(tUuid => tUuid === uuid);
      const prevIndex = currentIndex - 1;
      const array = prevArray;

      array[currentIndex] = array[prevIndex];
      array[prevIndex] = uuid;

      return [...array];
    });
  }, []);

  const onDown = useCallback((uuid: string) => {
    setTemplateUuids(prevArray => {
      const currentIndex = prevArray.findIndex(tUuid => tUuid === uuid);
      const nextIndex = currentIndex + 1;
      const array = prevArray;

      array[currentIndex] = array[nextIndex];
      array[nextIndex] = uuid;

      return [...array];
    });
  }, []);

  return (
    <TemplateContextProvider
      value={{
        push,
        edit,
        onUp,
        onDown,
        templateUuids,
        templatesData,
      }}
    >
      {children}
    </TemplateContextProvider>
  );
};

export default TemplateProvider;
