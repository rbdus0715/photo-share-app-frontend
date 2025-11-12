export interface AuthForm {
  email: string;
  password: string;
  passwordConfirm: string;
  disabled: boolean;
  isLoading: boolean;
}

export const initAuthForm: AuthForm = {
  email: "",
  password: "",
  passwordConfirm: "",
  disabled: true,
  isLoading: false,
};

export const AuthFormTypes = {
  UPDATE_FORM: "update_form",
  TOGGLE_LOADING: "toggle_loading",
  RESET: "reset",
} as const;

export type AuthFormAction =
  | {
      type: typeof AuthFormTypes.UPDATE_FORM;
      payload: Partial<AuthForm>; // 일부 필드만 업데이트 가능
    }
  | {
      type: typeof AuthFormTypes.TOGGLE_LOADING;
      payload?: boolean; // 로딩 상태를 명시적으로 지정하거나 토글
    }
  | {
      type: typeof AuthFormTypes.RESET;
    };

export const authFormReducer = (
  state: AuthForm,
  action: AuthFormAction
): AuthForm => {
  switch (action.type) {
    case AuthFormTypes.UPDATE_FORM:
      return { ...state, ...action.payload };

    case AuthFormTypes.TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };

    case AuthFormTypes.RESET:
      return initAuthForm;

    default:
      return state;
  }
};
