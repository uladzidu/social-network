import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg";
import {userType} from "../../redux/users-reducer";
import {Link} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {usersApi} from "../../api/api.js";


export type UsersClassComponentPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (page: number) => void
    users: userType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const UsersClassComponent = (props: UsersClassComponentPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((elem, index) =>
                    <span key={index}
                          onClick={() => {
                              props.onPageChange(elem)
                          }}
                          className={props.currentPage === elem ? styles.selected : ''}>
                        {elem} </span>
                )
            }
            {props.users.map((elem: userType) =>

                <div key={elem.id}>
                    <div>
                        <Link to={'/profile/' + elem.id}>
                            <img className={styles.userPhoto}
                                 src={elem.photos.small !== null ? elem.photos.small : userPhoto}
                                 alt="photo"/>
                        </Link>
                    </div>
                    <div>
                        {
                            !elem.followed
                                ? <button onClick={() => {
                                    usersApi.followUser(elem.id)
                                        .then((data: any) => {
                                            if (data.resultCode === 0) {
                                                props.follow(elem.id)
                                            }
                                        })
                                }}>Follow</button>

                                : <button onClick={() => {
                                    usersApi.unfollowUser(elem.id)
                                        .then((data: any) => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(elem.id)
                                            }
                                        })
                                }}>Unfollow</button>
                        }
                    </div>
                    <span>
                        <span>
                            <div>{elem.name}</div>
                            <div>{elem.status}</div>
                        </span>
                        <span>
                            <div>{'elem.location.country'}</div>
                            <div>{'elem.location.city'}</div>
                        </span>
                    </span>
                </div>
            )
            }
        </div>
    );
};
