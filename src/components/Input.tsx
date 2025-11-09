import { MaterialCommunityIcons } from "@expo/vector-icons";
import { forwardRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BLACK } from "../color";
import { InputProps } from "./Input.types";

const Input = forwardRef<TextInput, InputProps>(
  ({ title, iconName, ...props }, ref) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <TextInput
            ref={ref}
            {...props}
            style={[styles.input, iconName && { paddingLeft: 40 }]}
            textContentType="none"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.icon}>
            <MaterialCommunityIcons name={iconName} size={24} color={BLACK} />
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
  },
  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;
