import { authMeTC } from "./auth-reducer";
import { AppThunk } from "./redux-store";

type AppActionType = ReturnType<typeof initializedSuccessAC>;
type AppInitStateType = {
    initialized: boolean;
};

const appInitState: AppInitStateType = {
    initialized: false,
};

export const appReducer = (
    state: AppInitStateType = appInitState,
    action: AppActionType
): AppInitStateType => {
    switch (action.type) {
        case "app/INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: action.value,
            };
        default:
            return state;
    }
};

export const initializedSuccessAC = (value: boolean) => {
    return {
        type: "app/INITIALIZED-SUCCESS",
        value,
    } as const;
};

export const initializeAppTC = (): AppThunk => async (dispatch) => {
    dispatch(initializedSuccessAC(true));
    dispatch(authMeTC());
};
