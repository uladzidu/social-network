import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    followAC,
    setIsFetchingAC,
    setUsersAC,
    setUsersCountAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UsersClassComponent} from "./UsersClassComponent";
import {Preloader} from "../common/preloader/Preloader";
import {Dispatch} from "redux";
import {usersApi} from "../../api/api.js";


export type mapUsersStateToPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type mapUsersDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setUsersCount: (count: number) => void
    setIsFetching: (value: boolean) => void
}


export type UsersClassContainerPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: []
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (page: number) => void
    setUsers: (users: userType[]) => void
    isFetching: boolean
    setIsFetching: (value: boolean) => void
}


export class UsersClassContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data: any) => {
                this.props.setUsers(data.items)
                this.props.setUsersCount(data.totalCount / 200)
                this.props.setIsFetching(false)
            })
    }

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        usersApi.getUsers(page, this.props.pageSize)
            .then((data: any) => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {


        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersClassComponent
                    users={this.props.users}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}/>
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
        isFetching: state.usersPage.isFetching
    }
}

const mapUsersDispatchToProps = (dispatch: Dispatch): mapUsersDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: userType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(changeCurrentPageAC(page))
        },
        setUsersCount: (usersCount: number) => {
            dispatch(setUsersCountAC(usersCount))
        },
        setIsFetching: (value: boolean) => {
            dispatch(setIsFetchingAC(value))
        }
    }
}

export const UsersContainer = connect(mapUsersStateToProps, mapUsersDispatchToProps)(UsersClassContainer)