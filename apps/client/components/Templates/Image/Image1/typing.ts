export enum Image1FieldNames {
  image1_i1 = 'image1_i1',
  image1_i2 = 'image1_i2',
  image1_i3 = 'image1_i3',
}

export type Image1Type = {
  [Image1FieldNames.image1_i1]: string;
  [Image1FieldNames.image1_i2]: string;
  [Image1FieldNames.image1_i3]: string;
}