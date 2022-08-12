
type usersReducerActionAllTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


export type userReducerInitStateType = {
    users : any
}
const userReducerInitState : userReducerInitStateType  = {
    users : []
}

export const usersReducer = (state: userReducerInitStateType = userReducerInitState, action: usersReducerActionAllTypes) : userReducerInitStateType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map( (elem : any) =>
                    elem.id === action.userId
                        ? {...elem, followed: true}
                        : elem
                )
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map( (elem : any) =>
                    elem.id === action.userId
                        ? {...elem, followed: false}
                        : elem
                )
            }
        }
        case 'SET-USERS' : {
            return {
                ...state,
                users : [
                    ...state.users ,
                    ...action.users
                ]
            }
        }
        default:
            return state
    }
}
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsersAC = (users : any) => {
    return {
        type : 'SET-USERS',
        users : users
    } as const
}

