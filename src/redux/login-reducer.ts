import { AppThunk } from "./redux-store";
import { authApi } from "../api/api";

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
