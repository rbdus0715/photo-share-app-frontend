import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { AuthNavigation } from "../navigations/types";
import Input, { InputType, ReturnKeyTypes } from "../components/Input/Input";
import { useState } from "react";
import Button from "../components/Button/Button";
import { AuthRoutes } from "../navigations/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeInputView from "../components/SafeInputView/SafeInputView";

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigation>();
  const { top } = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeInputView>
      <View style={[styles.container, { paddingTop: top }]}>
        <Text>Sign In</Text>
        <Input
          inputType={InputType.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          styles={inputStyles}
        />
        <Input
          inputType={InputType.PASSWORD}
          returnKeyType={ReturnKeyTypes.DONE}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          styles={inputStyles}
        />
        <Button
          onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
          title="Sign In"
          styles={{
            container: {
              paddingHorizontal: 20,
              marginTop: 20,
            },
          }}
        />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const inputStyles = StyleSheet.create({
  container: { marginBottom: 20, paddingHorizontal: 20 },
  input: { borderWidth: 1 },
});

export default SignInScreen;
