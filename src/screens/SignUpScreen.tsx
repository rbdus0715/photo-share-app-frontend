import { Image, Keyboard, StyleSheet, TextInput, View } from "react-native";
import TextButton from "../components/TextButton/TextButton";
import { useNavigation } from "@react-navigation/native";
import HR from "../components/HR/HR";
import SafeInputView from "../components/SafeInputView/SafeInputView";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Input, { InputType, ReturnKeyTypes } from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useEffect, useRef, useState } from "react";
import { WHITE } from "../color";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPAsswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password || password !== passwordConfirm);
  }, [email, password, passwordConfirm]);

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
      <StatusBar style="light" />
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            source={require("../../assets/cover.png")}
            style={{ width: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
        >
          <Input
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
            inputType={InputType.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
            onSubmitEditing={() => passwordRef.current?.focus()}
            styles={{ container: { marginBottom: 20 } }}
          />
          <Input
            value={password}
            ref={passwordRef}
            onChangeText={(text) => setPassword(text.trim())}
            inputType={InputType.PASSWORD}
            returnKeyType={ReturnKeyTypes.NEXT}
            onSubmitEditing={() => passwordConfirmRef.current?.focus()}
            styles={{ container: { marginBottom: 20 } }}
          />
          <Input
            value={passwordConfirm}
            ref={passwordConfirmRef}
            onChangeText={(text) => setPAsswordConfirm(text.trim())}
            inputType={InputType.PASSWORD_CONFIRM}
            returnKeyType={ReturnKeyTypes.DONE}
            onSubmitEditing={onSubmit}
            styles={{ container: { marginBottom: 20 } }}
          />
          <Button
            title="회원가입"
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
            styles={{ container: { marginTop: 20 } }}
          />
          <HR text={"OR"} styles={{ container: { marginVertical: 30 } }} />
          <TextButton title={"로그인"} onPress={navigation.goBack} />
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default SignUpScreen;
