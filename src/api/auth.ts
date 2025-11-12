import { signInWithEmailAndPassword, getAuth, User } from "firebase/auth";

interface SignInProp {
  email: string;
  password: string;
}

export const signIn = async ({
  email,
  password,
}: SignInProp): Promise<User> => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
};
