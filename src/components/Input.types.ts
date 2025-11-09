import { TextInputProps } from "react-native";

export type iconNameType = "email" | "lock";

export interface InputProps extends TextInputProps {
  title: string;
  iconName: iconNameType;
}

export const IconNames = {
  EMAIL: "email",
  PASSWORD: "lock",
} as const;

export const KeyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
} as const;

export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
} as const;
