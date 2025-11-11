import { StyleSheet, Text, View } from "react-native";
import { GRAY, WHITE } from "../../color";

type HRProp = {
  styles?: any;
  text: string;
};

const HR = ({ styles, text }: HRProp) => {
  return (
    <View style={[defaultStyles.container, styles?.container]}>
      <View style={[defaultStyles.line, styles?.line]} />
      {!!text && <Text style={[defaultStyles.text, styles?.text]}>{text}</Text>}
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    ...StyleSheet.absoluteFillObject,
    height: "50%",
    borderBottomWidth: 1,
    borderBottomColor: GRAY.DARK,
  },
  text: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    color: GRAY.DARK,
  },
});

export default HR;
