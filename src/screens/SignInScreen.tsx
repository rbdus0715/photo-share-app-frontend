import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthRoutes } from "../navigations/routes";
import { AuthNavigation } from "../navigations/types";
import Input, { InputType, ReturnKeyTypes } from "../components/Input/Input";
import { useState } from "react";

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigation>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Input
        inputType={InputType.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
        value={email}
        onChangeText={(text) => setEmail(text.trim())}
      />
      <Input
        inputType={InputType.PASSWORD}
        returnKeyType={ReturnKeyTypes.DONE}
        value={password}
        onChangeText={(text) => setPassword(text.trim())}
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
