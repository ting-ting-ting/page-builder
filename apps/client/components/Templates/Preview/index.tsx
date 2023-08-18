import classes from './index.module.scss';

export const PARAGRAPH_PREVIEW_TYPE = 'PARAGRAPH_PREVIEW_TYPE';
export const IMAGE_PREVIEW_TYPE = 'IMAGE_PREVIEW_TYPE';

type CssUnit = 'px' | 'fr' | '%';
type Position = 'flex-start' | 'flex-end' | 'center';

export type PreviewProps = {
  items: (typeof PARAGRAPH_PREVIEW_TYPE | typeof IMAGE_PREVIEW_TYPE)[];
  gap?: number;
  gapUnit?: CssUnit;
  position?: Position;
  template?: Array<{
    unit: CssUnit;
    template: number;
  } | number>;
  templateUnit?: CssUnit;
  label?: string;
}

export type CssVarInterpolations = Record<string, string | number | null | undefined>;

const Preview = ({
  items,
  gap = 4,
  gapUnit = 'px',
  position = 'center',
  template = [1],
  templateUnit = 'px',
} : PreviewProps) => {
  const cssVars: CssVarInterpolations = {
    '--template': template.map(item => (typeof item === 'number' ? `${item}${templateUnit}` : `${item.template}${item.unit}`)).join(' '),
    '--gap': `${gap}${gapUnit}`,
    '--position': position,
  };
  return (
    <div className={classes.root} style={{...cssVars}}>
      {items.map(i => {
        switch (i) {
          case PARAGRAPH_PREVIEW_TYPE:
            return <div className={classes.paragraphItem} />;

          case IMAGE_PREVIEW_TYPE:
            return <div className={classes.imageItem} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

export default Preview;