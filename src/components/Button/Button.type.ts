import { StyleProp, ViewStyle } from "react-native";

export interface Styles {
  container?: StyleProp<ViewStyle>;
}

export type ButtonProp = {
  styles?: Styles;
  onPress: () => void;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
};
