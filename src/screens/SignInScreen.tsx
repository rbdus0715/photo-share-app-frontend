import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AuthNavigation } from "../navigations/types";
import Input, { InputType, ReturnKeyTypes } from "../components/Input/Input";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../components/Button/Button";
import { AuthRoutes } from "../navigations/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeInputView from "../components/SafeInputView/SafeInputView";
import TextButton from "../components/TextButton/TextButton";
import HR from "../components/HR/HR";
import { StatusBar } from "expo-status-bar";
import { WHITE } from "../color";

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigation>();
  const { top, bottom } = useSafeAreaInsets();
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

  useFocusEffect(
    useCallback(() => {
      return () => {
        setEmail("");
        setPassword("");
        setIsLoading(false);
        setDisabled(true);
      };
    }, [])
  );

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
        <ScrollView
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
          contentContainerStyle={{ alignItems: "center" }}
          bounces={false}
          keyboardShouldPersistTaps="always"
        >
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
            disabled={disabled}
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
        </ScrollView>
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
    flexGrow: 0,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default SignInScreen;
