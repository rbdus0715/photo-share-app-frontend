import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { SafeInputViewProp } from "./SafeInputView.type";

const SafeInputView = ({ children }: SafeInputViewProp) => {
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.select({ ios: "padding" })}
  >
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      {children}
    </Pressable>
  </KeyboardAvoidingView>;
};

export default SafeInputView;
