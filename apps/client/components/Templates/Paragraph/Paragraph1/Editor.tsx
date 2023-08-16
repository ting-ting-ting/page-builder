import TextAreaField from '@components/Form/TextAreaField';

const Paragraph1Editor = () => {
  return (
    <div>
      <TextAreaField label="段落一" registerName="p1" />
      <TextAreaField label="段落二" registerName="p2" />
      <TextAreaField label="段落三" registerName="p3" />
    </div>
  );
}

export default Paragraph1Editor;