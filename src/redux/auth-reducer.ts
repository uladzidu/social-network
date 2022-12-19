import { authApi } from "../api/api";
import { AppThunk } from "./redux-store";

const initState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    isLoading: false,
};

export const authReducer = (
    state: AuthInitStateType = initState,
    action: authReducerAT
): AuthInitStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            };
        case "CHANGE-IS-LOADING":
            return {
                ...state,
                isLoading: action.value,
            };
        default:
            return state;
    }
};

// Action Creators

export const setAuthUserDataAC = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) => {
    return {
        type: "SET-USER-DATA",
        payload: { id, email, login, isAuth },
    } as const;
};
export const isLoadingAC = (value: boolean) => {
    return {
        type: "CHANGE-IS-LOADING",
        value,
    } as const;
};

// Thunk Creators

export const authMeTC = (): AppThunk => async (dispatch) => {
    dispatch(isLoadingAC(true));

    try {
        const response = await authApi.authorization();
        if (response.resultCode === 0) {
            const { id, email, login } = response.data;
            dispatch(setAuthUserDataAC(id, email, login, true));
        }
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(isLoadingAC(false));
    }
};

export type AuthInitStateType = typeof initState;

export type authReducerAT = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof isLoadingAC>;
