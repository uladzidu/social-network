import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UsersClass} from "./UsersClass";


const mapUsersStateToProps = (state: any) => {
    return {
        users : state.usersPage.users
    }
}

const mapUsersDispatchToProps = (dispatch: any) => {
    return {
        follow : (userId : string) => {
            dispatch(followAC(userId))
        },
        unfollow : (userId : string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers : (users : any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapUsersStateToProps, mapUsersDispatchToProps)(UsersClass)