import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg";
import { userType } from "../../redux/users-reducer";
import { Link } from "react-router-dom";

export type UsersClassComponentPropsType = {
    users: userType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    setCurrentPage: (page: number) => void;
    onPageChange: (page: number) => void;
    followingInProgress: Array<number>;
    followThunk: (userId: number) => void;
    unfollowThunk: (userId: number) => void;
};

export const UsersComponent = (props: UsersClassComponentPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((elem, index) => (
                <span
                    key={index}
                    onClick={() => {
                        props.onPageChange(elem);
                    }}
                    className={props.currentPage === elem ? styles.selected : ""}
                >
                    {elem}{" "}
                </span>
            ))}
            {props.users.map((elem: userType) => {
                return (
                    <div key={elem.id}>
                        <div>
                            <Link to={"/profile/" + elem.id}>
                                <img
                                    className={styles.userPhoto}
                                    src={elem.photos.small !== null ? elem.photos.small : userPhoto}
                                    alt="photo"
                                />
                            </Link>
                        </div>
                        <div>
                            {!elem.followed ? (
                                <button
                                    disabled={props.followingInProgress.some(
                                        (elem2) => elem2 === elem.id
                                    )}
                                    onClick={() => props.followThunk(elem.id)}
                                >
                                    Follow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some(
                                        (elem2) => elem2 === elem.id
                                    )}
                                    onClick={() => props.unfollowThunk(elem.id)}
                                >
                                    Unfollow
                                </button>
                            )}
                        </div>
                        <span>
                            <span>
                                <div>{elem.name}</div>
                                <div>{elem.status}</div>
                            </span>
                            <span>
                                <div>{"elem.location.country"}</div>
                                <div>{"elem.location.city"}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
