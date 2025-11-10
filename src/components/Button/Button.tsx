import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ButtonProp } from "./Button.type";
import { GRAY, PRIMARY, WHITE } from "../../color";

const Button = ({
  styles,
  onPress,
  title,
  disabled,
  isLoading,
}: ButtonProp) => {
  return (
    <View style={[defaultStyles.container, styles?.container]}>
      <Pressable
        onPress={() => onPress()}
        disabled={disabled || isLoading}
        style={({ pressed }) => [
          defaultStyles.button,
          {
            backgroundColor: (() => {
              switch (true) {
                case disabled || isLoading:
                  return PRIMARY.LIGHT;
                case pressed:
                  return PRIMARY.DARK;
                default:
                  return PRIMARY.DEFAULT;
              }
            })(),
          },
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={GRAY.DARK} />
        ) : (
          <Text style={defaultStyles.title}>{title}</Text>
        )}
      </Pressable>
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
});

export default Button;
