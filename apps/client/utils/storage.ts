export enum StorageName {
  TEMPLATE_UUIDS = 'TEMPLATE_UUIDS',
  TEMPLATE_DATA_WITH_UUID = 'TEMPLATE_DATA_WITH_UUID',
}

export const setLocalStorage = (name: StorageName, value: string): void => {
  localStorage.setItem(name, value);
};

/** 不存在時回傳空字串 */
export const getLocalStorage = (name: StorageName): string => {
  return localStorage.getItem(name) ?? '';
};