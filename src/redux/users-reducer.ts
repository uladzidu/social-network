import { usersApi } from "../api/api";

type usersReducerActionAllTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof setUsersCountAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof changeFollowingProgressAC>;

export type userReducerInitStateType = {
    users: userType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
};

export type userType = {
    name: string;
    id: number;
    uniqueUrlName: null | string;
    photos: {
        small: null | string;
        large: null | string;
    };
    status: null | string;
    followed: boolean;
};

const userReducerInitState: userReducerInitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export const usersReducer = (
    state: userReducerInitStateType = userReducerInitState,
    action: usersReducerActionAllTypes
): userReducerInitStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map((elem: userType) =>
                    elem.id === action.id ? { ...elem, followed: true } : elem
                ),
            };
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map((elem: userType) =>
                    elem.id === action.id ? { ...elem, followed: false } : elem
                ),
            };
        }
        case "SET-USERS": {
            return {
                ...state,
                users: action.users,
            };
        }
        case "CHANGE-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.page,
            };
        }
        case "SET-COUNT-PAGES": {
            return {
                ...state,
                totalUsersCount: action.usersCount,
            };
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.value,
            };
        }
        case "CHANGE-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.value
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter((elem) => elem !== action.id),
            };
        default:
            return state;
    }
};

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        id: userId,
    } as const;
};
export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        id: userId,
    } as const;
};
export const setUsersAC = (users: userType[]) => {
    return {
        type: "SET-USERS",
        users: users,
    } as const;
};
export const changeCurrentPageAC = (page: number) => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        page,
    } as const;
};
export const setUsersCountAC = (usersCount: number) => {
    return {
        type: "SET-COUNT-PAGES",
        usersCount,
    } as const;
};
export const setIsFetchingAC = (value: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        value,
    } as const;
};
export const changeFollowingProgressAC = (value: boolean, id: number) => {
    return {
        type: "CHANGE-FOLLOWING-PROGRESS",
        value,
        id,
    } as const;
};

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingAC(true));
        const response = await usersApi.getUsers(currentPage, pageSize);
        dispatch(changeCurrentPageAC(currentPage));
        dispatch(setIsFetchingAC(false));
        dispatch(setUsersAC(response.items));
        dispatch(setUsersCountAC(response.totalCount / 200));
    };
};

export const followThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        dispatch(changeFollowingProgressAC(true, userId));
        usersApi.followUser(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId));
            }
            dispatch(changeFollowingProgressAC(false, userId));
        });
    };
};

export const unfollowThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        dispatch(changeFollowingProgressAC(true, userId));
        usersApi.unfollowUser(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId));
            }
            dispatch(changeFollowingProgressAC(false, userId));
        });
    };
};
