import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthRoutes } from "../navigations/routes";
import { AuthNavigation } from "../navigations/types";
import Input, { InputType, ReturnKeyTypes } from "../components/Input/Input";

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigation>();

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Input inputType={InputType.EMAIL} returnKeyType={ReturnKeyTypes.NEXT} />
      <Input
        inputType={InputType.PASSWORD}
        returnKeyType={ReturnKeyTypes.DONE}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;
