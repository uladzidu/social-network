import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    followAC,
    setUsersAC, setUsersCountAC,
    unfollowAC,
    userReducerInitStateType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {UsersClassComponent} from "./UsersClassComponent";

export type mapUsersStateToPropsType = {
    users : userReducerInitStateType,
    pageSize : number
    totalUsersCount : number
    currentPage : number
}
export type mapUsersDispatchToProps = {
    follow : (userId : number) => void
    unfollow : (userId : number) => void
    setUsers : (users : userType[]) => void
    setCurrentPage : (page : number) => void
    setUsersCount : (count : number) => void
}


export type UsersClassAPIComponentPropsType = {
    totalUsersCount : number
    pageSize : number
    currentPage : number
    users : []
    follow : (userId : number) => void
    unfollow : (userId : number) => void
    setUsersCount : (usersCount : number) => void
    setCurrentPage : (page : number) => void
    setUsers : (users : any) => void
}
export type userType = {
    "name": string
    "id": number
    "uniqueUrlName": null | undefined,
    "photos": {
        "small": null | undefined
        "large": null | undefined
    },
    "status": null | undefined,
    "followed": boolean
}

export class UsersClassContainer extends React.Component<UsersClassAPIComponentPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<any, any>) => {
                this.props.setUsers(response.data.items)
                // this.props.setUsersCount(response.data.totalCount)
                this.props.setUsersCount(response.data.totalCount / 200)
            })
    }

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<any, any>) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return (
            <UsersClassComponent
                users={this.props.users}
                onPageChange={this.onPageChange}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />

        )
    }
}

const mapUsersStateToProps = (state: AppStateType) : mapUsersStateToPropsType => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage
    }
}

const mapUsersDispatchToProps = (dispatch: Dispatch) : mapUsersDispatchToProps => {
    return {
        follow : (userId : number) => {
            dispatch(followAC(userId))
        },
        unfollow : (userId : number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers : (users : userType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage : (page : number) => {
            dispatch(changeCurrentPageAC(page))
        },
        setUsersCount : (usersCount : number) => {
            dispatch(setUsersCountAC(usersCount))
        }
    }
}

export const UsersContainer = connect(mapUsersStateToProps, mapUsersDispatchToProps)(UsersClassContainer)