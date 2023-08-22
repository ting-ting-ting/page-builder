import Preview, { AVATAR_PREVIEW_TYPE, PARAGRAPH_PREVIEW_TYPE } from '@components/Templates/Preview';

const Profiles1Preview = () => {
  return (
    <Preview
      items={[AVATAR_PREVIEW_TYPE, PARAGRAPH_PREVIEW_TYPE]}
      template={[{
        template: 1,
        unit: 'fr',
      }, {
        template: 3,
        unit: 'fr',
      }]}
    />
  );
}

export default Profiles1Preview;