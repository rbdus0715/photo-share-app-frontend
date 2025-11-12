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
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import Button from "../components/Button/Button";
import { AuthRoutes } from "../navigations/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeInputView from "../components/SafeInputView/SafeInputView";
import TextButton from "../components/TextButton/TextButton";
import HR from "../components/HR/HR";
import { StatusBar } from "expo-status-bar";
import { WHITE } from "../color";
import {
  AuthForm,
  authFormReducer,
  AuthFormTypes,
  initAuthForm,
} from "../reducers/authFormReducer";

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigation>();
  const { top, bottom } = useSafeAreaInsets();
  const passwordRef = useRef<TextInput>(null);

  const [form, dispatch] = useReducer(authFormReducer, initAuthForm);

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!form.disabled && !form.isLoading) {
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
      console.log(form.email, form.password);
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => dispatch({ type: AuthFormTypes.RESET });
    }, [])
  );

  const updateForm = (payload: Partial<AuthForm>) => {
    const newForm = { ...form, ...payload };
    const disabled = !newForm.email || !newForm.password;

    dispatch({
      type: AuthFormTypes.UPDATE_FORM,
      payload: { disabled, ...payload },
    });
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
        <ScrollView
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
          contentContainerStyle={{ alignItems: "center" }}
          bounces={false}
          keyboardShouldPersistTaps="always"
        >
          <Input
            inputType={InputType.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
            value={form.email}
            onChangeText={(text) => updateForm({ email: text.trim() })}
            styles={{ container: { marginTop: 20 } }}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <Input
            ref={passwordRef}
            inputType={InputType.PASSWORD}
            returnKeyType={ReturnKeyTypes.DONE}
            value={form.password}
            onChangeText={(text) => updateForm({ password: text.trim() })}
            styles={{ container: { marginTop: 20 } }}
            onSubmitEditing={onSubmit}
          />
          <Button
            disabled={form.disabled}
            isLoading={form.isLoading}
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
