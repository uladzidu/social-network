import React from "react";
import { connect } from "react-redux";
import {
    changeCurrentPageAC,
    followThunkCreator,
    getUsersTC,
    unfollowThunkCreator,
    userType,
} from "../../redux/users-reducer";
import { AppStateType } from "../../redux/redux-store";
import { UsersComponent } from "./UsersComponent";
import { Preloader } from "../common/preloader/Preloader";
import { compose, Dispatch } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/selectors/users-selector";

export type mapUsersStateToPropsType = {
    users: userType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
};
export type mapUsersDispatchToProps = {
    setCurrentPage: (page: number) => void;
    getUsersThunk: (currentPage: number, pageSize: number) => void;
    followThunk: (userId: number) => void;
    unfollowThunk: (userId: number) => void;
};

export type UsersClassContainerPropsType = mapUsersStateToPropsType & mapUsersDispatchToProps;

export class UsersClassContainer extends React.Component<UsersClassContainerPropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page);
        this.props.getUsersThunk(page, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <UsersComponent {...this.props} onPageChange={this.onPageChange} />
            </>
        );
    }
}

const mapUsersStateToProps = (state: AppStateType): mapUsersStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

const mapUsersDispatchToProps = (dispatch: Dispatch | any): mapUsersDispatchToProps => {
    return {
        setCurrentPage: (page: number) => {
            dispatch(changeCurrentPageAC(page));
        },
        getUsersThunk: (currentPage: number, pageSize: number) => {
            dispatch(getUsersTC(currentPage, pageSize));
        },
        followThunk: (userId: number) => {
            dispatch(followThunkCreator(userId));
        },
        unfollowThunk: (userId: number) => {
            dispatch(unfollowThunkCreator(userId));
        },
    };
};

export default compose<React.ComponentType>(
    connect(mapUsersStateToProps, mapUsersDispatchToProps)
    //WithAuthRedirect
)(UsersClassContainer);
