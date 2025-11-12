import { Pressable, StyleSheet, Text } from "react-native";
import { PRIMARY } from "../../color";

type TextButtonProp = {
  title: string;
  onPress: () => void;
  styles?: any;
  hitSlop?: number;
};

const TextButton = ({ styles, title, onPress, hitSlop }: TextButtonProp) => {
  return (
    <Pressable
      style={styles?.button}
      hitSlop={hitSlop ? hitSlop : 10}
      onPress={onPress}
    >
      <Text style={[defaultStyles.title, styles?.title]}>{title}</Text>
    </Pressable>
  );
};

const defaultStyles = StyleSheet.create({
  title: {
    color: PRIMARY.DEFAULT,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default TextButton;
