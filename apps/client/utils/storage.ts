export enum StorageName {
  TEMPLATE_UUIDS = 'TEMPLATE_UUIDS',
  TEMPLATE_DATA_WITH_UUID = 'TEMPLATE_DATA_WITH_UUID',
}

export const setLocalStorage = (name: StorageName, value: string): void => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name: StorageName): string => {
  if (typeof window === 'undefined') return '';

  return localStorage.getItem(name) ?? '';
};