import { AppThunk } from "./redux-store";
import { authApi } from "../api/api";
import { isLoadingAC, setAuthUserDataAC } from "./auth-reducer";

const initState = {
    email: "",
    isLoggedIn: false,
};
type InitStateType = typeof initState;
type LoginActionType = ReturnType<typeof isLoggedInAC>;

export const loginReducer = (state: InitStateType = initState, action: LoginActionType) => {
    switch (action.type) {
        case "login/SET-EMAIL":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

// Action Creators

export const isLoggedInAC = (isLoggedIn: boolean) =>
    ({ type: "login/SET-EMAIL", isLoggedIn } as const);

// ThunkCreators

export const loginTC =
    (email: string, password: string, rememberMe: boolean): AppThunk =>
    async (dispatch) => {
        await authApi.login(email, password, rememberMe);
        dispatch(isLoggedInAC(true));
    };

export const logoutTC = (): AppThunk => {
    return async (dispatch) => {
        dispatch(isLoadingAC(true));
        try {
            const response = await authApi.logout();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
                dispatch(isLoggedInAC(false));
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(isLoadingAC(false));
        }
    };
};
