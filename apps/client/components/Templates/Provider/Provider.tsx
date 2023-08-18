import { useCallback, useState, ReactNode } from 'react';
import moment from 'moment';
import { uniqueId, omit } from 'lodash';
import { TemplateContextProvider } from './Context';
import { TemplateIdEnum } from '../enum';
import { TemplateProps } from '../typing';

const TemplateProvider = ({ children } : { children: ReactNode }) => {
  const [templateUuids, setTemplateUuids] = useState<string[]>([]);
  const [templatesDataWithUuid, setTemplatesDataWithUuid] = useState<{
    [uuid: string]: {
      id: TemplateIdEnum;
      uuid: string;
      props: TemplateProps;
    }
  }>({});

  const push = useCallback(({
    id,
    props
  } : {
    id: TemplateIdEnum;
    props: TemplateProps;
  }) => {
    const currentUuid = uniqueId(`${moment().valueOf()}-`);

    setTemplateUuids(prevState => [
      ...prevState,
      currentUuid,
    ]);

    setTemplatesDataWithUuid(prevState => ({
      ...prevState,
      [currentUuid]: {
        id,
        uuid: currentUuid,
        props,
      },
    }));
  }, []);

  const pushUnderUuid = useCallback(({
    id,
    uuid,
    props
  } : {
    id: TemplateIdEnum;
    uuid: string;
    props: TemplateProps;
  }) => {
    const currentUuid = uniqueId(`${moment().valueOf()}-`);

    setTemplateUuids(prevState => {
      const targetIndex = prevState.findIndex(s => s === uuid);

      return [
        ...prevState.slice(0, targetIndex + 1),
        currentUuid,
        ...prevState.slice(targetIndex + 1),
      ];
    });

    setTemplatesDataWithUuid(prevState => ({
      ...prevState,
      [currentUuid]: {
        id,
        uuid: currentUuid,
        props,
      },
    }));
  }, []);

  const edit = useCallback(({
    id,
    uuid,
    props
  } : {
    id: TemplateIdEnum;
    uuid: string;
    props: TemplateProps;
  }) => {
    setTemplatesDataWithUuid(prevState => ({
      ...prevState,
      [uuid]: {
        ...prevState[uuid],
        id,
        props,
      },
    }));
  }, []);

  const remove = useCallback((uuid: string) => {
    setTemplateUuids(prevState => {
      const targetIndex = prevState.findIndex(s => s === uuid);

      return [
        ...prevState.slice(0, targetIndex),
        ...prevState.slice(targetIndex + 1),
      ];
    });
    setTemplatesDataWithUuid(prevState => omit(prevState, uuid));
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
        pushUnderUuid,
        edit,
        remove,
        onUp,
        onDown,
        templateUuids,
        templatesDataWithUuid,
      }}
    >
      {children}
    </TemplateContextProvider>
  );
};

export default TemplateProvider;
