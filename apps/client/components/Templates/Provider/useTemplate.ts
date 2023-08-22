import { useContext } from 'react';
import { TemplateContext } from "./Context";

export const useTemplate = () => {
  const template = useContext(TemplateContext);

  if (!template) {
    throw new Error("Please provide template");
  }

  return template;
};
