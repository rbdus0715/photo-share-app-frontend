import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthRoutes } from "../navigations/routes";
import { AuthNavigation } from "../navigations/types";

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigation>();

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
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
