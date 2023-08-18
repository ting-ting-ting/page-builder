import Preview, {
  IMAGE_PREVIEW_TYPE,
  PARAGRAPH_PREVIEW_TYPE,
} from '@components/Templates/Preview';

const Paragraph3Preview = () => {
  return (
    <Preview
      items={[IMAGE_PREVIEW_TYPE, PARAGRAPH_PREVIEW_TYPE]}
      template={[{
        template: 1,
        unit: 'fr',
      }, {
        template: 2,
        unit: 'fr',
      }]}
    />
  );
}

export default Paragraph3Preview;