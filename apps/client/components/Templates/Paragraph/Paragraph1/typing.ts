export enum Paragraph1FieldNames {
  paragraph1_p1 = 'paragraph1_p1',
  paragraph1_p2 = 'paragraph1_p2',
  paragraph1_p3 = 'paragraph1_p3',
}

export type Paragraph1Type = {
  [Paragraph1FieldNames.paragraph1_p1]: string;
  [Paragraph1FieldNames.paragraph1_p2]: string;
  [Paragraph1FieldNames.paragraph1_p3]: string;
}