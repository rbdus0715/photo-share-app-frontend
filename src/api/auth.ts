import {
  AuthErrorCodes,
  AuthErrorMap,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface signInProp {
  email: string;
  password: string;
}

export const getAuthErrorMessage = (errorCode: AuthErrorMap) => {
  switch (errorCode) {
    case AuthErrorCodes.USER_DELETED:
      return "계정을 찾을 수 없습니다.";
    case AuthErrorCodes.INVALID_EMAIL:
      return "유효하지 않은 이메일 주소입니다.";
    case AuthErrorCodes.INVALID_PASSWORD:
      return "잘못된 비빌번호입니다.";
    default:
      return "로그인에 실패하였습니다.";
  }
};

export const signIn = async ({ email, password }: signInProp) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
};
