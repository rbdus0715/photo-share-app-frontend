import { MaterialCommunityIcons } from "@expo/vector-icons";
import { forwardRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GRAY, PRIMARY } from "../../color";
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
  ({ inputType, styles, ...props }, ref) => {
    const {
      title,
      placeholder,
      keyboardType,
      secureTextEntry,
      iconName: { active, inactive },
    } = InputTypeProps[inputType];
    const { value } = props;

    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={[defaultStyles.container, styles?.container]}>
        <Text
          style={[
            defaultStyles.title,
            { color: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK },
            styles?.title,
          ]}
        >
          {title}
        </Text>
        <View>
          <TextInput
            ref={ref}
            {...props}
            placeholder={placeholder}
            keyboardType={KeyboardTypes[keyboardType]}
            secureTextEntry={secureTextEntry}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            textContentType="none"
            autoCapitalize="none"
            autoCorrect={false}
            style={[
              defaultStyles.input,
              {
                borderColor: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK,
                color: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK,
              },
              styles?.input,
            ]}
          />
          <View style={[defaultStyles.icon, styles?.icon]}>
            <MaterialCommunityIcons
              name={isFocused ? active : inactive}
              size={24}
              color={value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK}
            />
          </View>
        </View>
      </View>
    );
  }
);

const defaultStyles = StyleSheet.create({
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
