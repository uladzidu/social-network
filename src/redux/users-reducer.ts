type usersReducerActionAllTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof setUsersCountAC>

export type userReducerInitStateType = {
    users: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const userReducerInitState: userReducerInitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
}

export const usersReducer = (state: userReducerInitStateType = userReducerInitState, action: usersReducerActionAllTypes): userReducerInitStateType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map((elem: any) =>
                    elem.id === action.userId
                        ? {...elem, followed: true}
                        : elem
                )
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map((elem: any) =>
                    elem.id === action.userId
                        ? {...elem, followed: false}
                        : elem
                )
            }
        }
        case 'SET-USERS' : {
            return {
                ...state,
                users: action.users
            }
        }
        case "CHANGE-CURRENT-PAGE": {
            return {
                ...state,
                currentPage : action.page
            }
        }
        case "SET-COUNT-PAGES": {
            return {
                ...state,
                totalUsersCount : action.usersCount
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
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const changeCurrentPageAC = (page: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        page
    } as const
}
export const setUsersCountAC = (usersCount : number) => {
    return {
        type : 'SET-COUNT-PAGES',
        usersCount
    } as const
}

