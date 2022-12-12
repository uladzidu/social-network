import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import { mapUsersDispatchToProps, mapUsersStateToPropsType } from "./UsersContainer";

type UsersPropsType = mapUsersDispatchToProps & mapUsersStateToPropsType;

export const Users = (props: UsersPropsType) => {
    const getUsers = () => {

        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => {
                    // @ts-ignore
                    props.setUsers(response.data.items);
                });
        }
    };

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            // @ts-ignore
            {props.users.map((elem: any) => (
                <div key={elem.id}>
                    <div>
                        <img
                            className={styles.userPhoto}
                            src={elem.photos.small !== null ? elem.photos.small : styles.userPhoto}
                            alt="photo"
                        />
                    </div>
                    <div>
                        {!elem.followed ? (
                            <button
                                onClick={() => {
                                    // @ts-ignore
                                    props.follow(elem.id);
                                }}
                            >
                                Follow
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    // @ts-ignore
                                    props.unfollow(elem.id);
                                }}
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
            ))}
        </div>
    );
};
