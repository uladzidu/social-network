import {getAuthUserDataThunkCreator} from "./auth-reducer";

type AppActionType = ReturnType<typeof initializedSuccessAC>
type AppInitStateType = {
    initialized: boolean
}

const appInitState: AppInitStateType = {
    initialized: false
}

export const appReducer = (state: AppInitStateType = appInitState, action: AppActionType): AppInitStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default :
            return state
    }
}

export const initializedSuccessAC = () => {
    return {
        type: "INITIALIZED-SUCCESS"
    } as const
}

export const initializeAppTC = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataThunkCreator())

    promise.then(() => {
        dispatch(initializedSuccessAC())
    })


}