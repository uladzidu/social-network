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
                ...action.payload
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

// Action Creators

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, email, login, isAuth}
    } as const
}
export const changeIsFetchingAC = (value: boolean | null) => {
    return {
        type: 'CHANGE-IS-FETCHING',
        value
    } as const
}

// Thunk Creators

export const getAuthUserDataThunkCreator = () => (dispatch: any) => {
    dispatch(changeIsFetchingAC(true))
    authApi.authorization()
        .then((res: any) => {
            dispatch(changeIsFetchingAC(false))
            if (res.resultCode === 0) {
                const {id, email, login} = res.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authApi.login(email, password, rememberMe)
        .then((res: any) => {
            console.log(res.data.messages)
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            }
        })
}

export const logoutThunkCreator = () => {
    return (dispatch: any) => {
        authApi.logout()
            .then((res: any) => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}