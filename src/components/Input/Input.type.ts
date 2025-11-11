import { ReturnKeyType, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface Styles {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  input?: StyleProp<TextStyle>;
  icon?: StyleProp<ViewStyle>;
}

export type InputProp = {
  inputType: "EMAIL" | "PASSWORD";
  returnKeyType: ReturnKeyType;
  value: string;
  onChangeText: (text: string) => void;
  styles?: Styles;
  onSubmitEditing: () => void;
};
