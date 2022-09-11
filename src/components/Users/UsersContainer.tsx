import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    followThunkCreator,
    getUsersThunkCreator,
    unfollowThunkCreator,
    userType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UsersComponent} from "./UsersComponent";
import {Preloader} from "../common/preloader/Preloader";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type mapUsersStateToPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type mapUsersDispatchToProps = {
    setCurrentPage: (page: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followThunk : (userId: number) => void
    unfollowThunk : (userId: number) => void
}

export type UsersClassContainerPropsType = mapUsersStateToPropsType & mapUsersDispatchToProps

export class UsersClassContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunk(page, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersComponent {...this.props} onPageChange={this.onPageChange}/>
            </>
        )
    }
}

const mapUsersStateToProps = (state: AppStateType): mapUsersStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapUsersDispatchToProps = (dispatch: Dispatch | any): mapUsersDispatchToProps => {
    return {
        setCurrentPage: (page: number) => {
            dispatch(changeCurrentPageAC(page))
        },
        getUsersThunk: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        followThunk : (userId: number) => {
            dispatch(followThunkCreator(userId))
        },
        unfollowThunk : (userId: number) => {
            dispatch(unfollowThunkCreator(userId))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapUsersStateToProps, mapUsersDispatchToProps),
    WithAuthRedirect
)(UsersClassContainer)