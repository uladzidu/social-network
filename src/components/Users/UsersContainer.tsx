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
import {UsersClass} from "./UsersClass";

export type mapUsersStateToPropsType = {
    users : userReducerInitStateType,
    pageSize : number
    totalUsersCount : number
    currentPage : number
}

export type mapUsersDispatchToProps = {
    follow : (userId : number) => void
    unfollow : (userId : number) => void
    setUsers : (users : any) => void
    setCurrentPage : (page : number) => void
    setUsersCount : (count : number) => void
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
        setUsers : (users : any) => {
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

export const UsersContainer = connect(mapUsersStateToProps, mapUsersDispatchToProps)(UsersClass)