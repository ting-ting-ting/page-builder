import Preview, { PARAGRAPH_PREVIEW_TYPE } from '@components/Templates/Preview';

const Paragraph1Preview = () => {
  return (
    <Preview
      items={[PARAGRAPH_PREVIEW_TYPE, PARAGRAPH_PREVIEW_TYPE, PARAGRAPH_PREVIEW_TYPE]}
      template={[{
        template: 1,
        unit: 'fr',
      }, {
        template: 1,
        unit: 'fr',
      }, {
        template: 1,
        unit: 'fr',
      }]}
    />
  );
}

export default Paragraph1Preview;