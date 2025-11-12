import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface signInProp {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: signInProp) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
};
