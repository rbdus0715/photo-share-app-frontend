import { useNavigation } from "@react-navigation/native";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthNavigation } from "../navigations/types";
import Input, { InputType, ReturnKeyTypes } from "../components/Input/Input";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button/Button";
import { AuthRoutes } from "../navigations/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeInputView from "../components/SafeInputView/SafeInputView";
import TextButton from "../components/TextButton/TextButton";
import HR from "../components/HR/HR";

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigation>();
  const { top } = useSafeAreaInsets();
  const passwordRef = useRef<TextInput>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!disabled && !isLoading) {
      setIsLoading(true);
      console.log(email, password);
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <View style={[styles.container, { paddingTop: top }]}>
        <Text>Sign In</Text>
        <Input
          inputType={InputType.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          styles={{ container: { marginTop: 20 } }}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Input
          ref={passwordRef}
          inputType={InputType.PASSWORD}
          returnKeyType={ReturnKeyTypes.DONE}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          styles={{ container: { marginTop: 20 } }}
          onSubmitEditing={onSubmit}
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
        <HR text={"OR"} styles={{ container: { marginVertical: 30 } }} />
        <TextButton
          title={"회원가입"}
          onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
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
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
