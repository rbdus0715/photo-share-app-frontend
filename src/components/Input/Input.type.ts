import { ReturnKeyType } from "react-native";

export type InputProp = {
  inputType: "EMAIL" | "PASSWORD";
  returnKeyType: ReturnKeyType;
  value: string;
  onChangeText: (text: string) => void;
};
