import { authApi } from "../api/api";
// import { stopSubmit } from "redux-form";

export type initStateauthReducerType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean | null;
  isAuth: boolean;
};
const initState: initStateauthReducerType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};
export type authReducerAT =
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof changeIsFetchingAC>;

export const authReducer = (
  state: initStateauthReducerType = initState,
  action: authReducerAT
): initStateauthReducerType => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "CHANGE-IS-FETCHING":
      return {
        ...state,
        isFetching: action.value,
      };
    default:
      return state;
  }
};

// Action Creators

export const setAuthUserDataAC = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: "SET-USER-DATA",
    payload: { userId, email, login, isAuth },
  } as const;
};
export const changeIsFetchingAC = (value: boolean | null) => {
  return {
    type: "CHANGE-IS-FETCHING",
    value,
  } as const;
};

// Thunk Creators

export const getAuthUserDataThunkCreator = () => (dispatch: any) => {
  dispatch(changeIsFetchingAC(true));
  return authApi.authorization().then((res: any) => {
    dispatch(changeIsFetchingAC(false));
    if (res.resultCode === 0) {
      const { userId, email, login } = res.data;
      dispatch(setAuthUserDataAC(userId, email, login, true));
    }
  });
};

export const loginThunkCreator =
  (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authApi.login(email, password, rememberMe).then((res: any) => {
      console.log(res.data.messages);
      if (res.data.resultCode === 0) {
      } else {
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
        // dispatch(stopSubmit("login", { _error: errorMessage }));
      }
    });
  };

export const logoutThunkCreator = () => {
  return (dispatch: any) => {
    authApi.logout().then((res: any) => {
      if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
      }
    });
  };
};
