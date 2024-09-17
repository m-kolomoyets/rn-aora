export type WithChildren<TProps> = TProps & {
  children?: React.ReactNode;
};

export type ObjKeys<TObject> = keyof TObject;
export type ObjValues<TObject> = TObject[keyof TObject];
