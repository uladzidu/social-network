import {authApi} from "../api/api";


export type initStateauthReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean | null
    isAuth: boolean
}
const initState: initStateauthReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}
export type authReducerAT =
    ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof changeIsFetchingAC>


export const authReducer = (state: initStateauthReducerType = initState, action: authReducerAT): initStateauthReducerType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "CHANGE-IS-FETCHING" :
            return {
                ...state,
                isFetching: action.value
            }
        default :
            return state
    }
}

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    } as const
}
export const changeIsFetchingAC = (value: boolean | null) => {
    return {
        type: 'CHANGE-IS-FETCHING',
        value
    } as const
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: any) => {
        dispatch(changeIsFetchingAC(true))
        authApi.authorization()
            .then((data: any) => {
                    dispatch(changeIsFetchingAC(false))
                    if (data.resultCode === 0) {
                        const {id, email, login} = data.data
                        dispatch(setAuthUserDataAC(id, email, login))
                    }
                }
            )

    }
}