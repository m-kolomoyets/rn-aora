import type { StyleProp, ViewStyle } from "react-native";

export type WithChildren<TProps> = TProps & {
  children?: React.ReactNode;
};

export type WithStyle<TProps, TElemStyles = ViewStyle> = TProps & {
  style?: StyleProp<TElemStyles>;
};

export type ObjKeys<TObject> = keyof TObject;
export type ObjValues<TObject> = TObject[keyof TObject];
