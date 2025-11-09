import { MaterialCommunityIcons } from "@expo/vector-icons";
import { forwardRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BLACK } from "../../color";
import { InputProp } from "./Input.type";

export const KeyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
} as const;

export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
} as const;

export const InputType = {
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
} as const;

export const InputTypeProps = {
  EMAIL: {
    title: "EMAIL",
    placeholder: "your@email.com",
    keyboardType: "EMAIL",
    secureTextEntry: false,
    iconName: { active: "email", inactive: "email-outline" },
  },
  PASSWORD: {
    title: "PASSWORD",
    placeholder: "PASSWORD",
    keyboardType: "DEFAULT",
    secureTextEntry: true,
    iconName: { active: "lock", inactive: "lock-outline" },
  },
} as const;

const Input = forwardRef<TextInput, InputProp>(
  ({ inputType, ...props }, ref) => {
    const {
      title,
      placeholder,
      keyboardType,
      secureTextEntry,
      iconName: { active, inactive },
    } = InputTypeProps[inputType];

    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <TextInput
            ref={ref}
            {...props}
            placeholder={placeholder}
            keyboardType={KeyboardTypes[keyboardType]}
            textContentType="none"
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={styles.input}
          />
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={isFocused ? active : inactive}
              size={24}
              color={BLACK}
            />
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    marginBottom: 4,
    fontWeight: "700",
  },
  input: {
    borderRadius: 8,
    borderBottomWidth: 1,
    height: 42,
    paddingHorizontal: 10,
    paddingLeft: 40,
  },
  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;
