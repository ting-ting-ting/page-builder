import TextAreaField from '@components/Form/TextAreaField';

const Paragraph1Editor = () => {
  return (
    <div>
      <TextAreaField
        label="段落一"
        registerName="p1"
        defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
      />
      <TextAreaField
        label="段落二"
        registerName="p2"
        defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
      />
      <TextAreaField
        label="段落三"
        registerName="p3"
        defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
      />
    </div>
  );
}

export default Paragraph1Editor;