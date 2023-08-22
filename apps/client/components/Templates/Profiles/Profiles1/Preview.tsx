import Preview, { IMAGE_PREVIEW_TYPE } from '@components/Templates/Preview';

const Profiles1Preview = () => {
  return (
    <Preview
      items={[IMAGE_PREVIEW_TYPE, IMAGE_PREVIEW_TYPE, IMAGE_PREVIEW_TYPE]}
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

export default Profiles1Preview;