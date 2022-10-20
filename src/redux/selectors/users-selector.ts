import { AppStateType } from "../redux-store";
import { mapUsersStateToPropsType } from "../../components/Users/UsersContainer";
import { createSelector } from "reselect";

const mapUsersStateToProps = (state: AppStateType): mapUsersStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
};

export const getUsersWithReselect = createSelector(getUsers, (users: any) => users.usersPage.users);

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
};
