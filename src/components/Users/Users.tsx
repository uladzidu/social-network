import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import {mapUsersDispatchToProps, mapUsersStateToPropsType} from "./UsersContainer";


type UsersPropsType = mapUsersDispatchToProps & mapUsersStateToPropsType

export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        // @ts-ignore
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response: any) => {
                    props.setUsers(response.data.items)
                })
        }
    }


    // if (props.users.length === 0) {
    // props.setUsers([
    //     {
    //         id: v1(),
    //         fullName: 'Vlad',
    //         status: 'FrontEnd Dev coming soon ... ',
    //         location: {city: 'Wroclaw', country: 'Poland'},
    //         followed: true,
    //         photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Gyn',
    //         status: 'His wife',
    //         location: {city: 'Wroclaw', country: 'Poland'},
    //         followed: false,
    //         photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Andr',
    //         status: 'I am a Bro',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         followed: true,
    //         photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Father',
    //         status: 'Dzien dobry! ',
    //         location: {city: 'Molodechno', country: 'Belarus'},
    //         followed: true,
    //         photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
    //
    //     },
    // ])
    // }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            // @ts-ignore
            {props.users.map((elem: any) => <div key={elem.id}>

                    <div>
                        <img className={styles.userPhoto}
                             src={elem.photos.small !== null ? elem.photos.small : styles.userPhoto}
                             alt="photo"/>
                    </div>
                    <div>
                        {!elem.followed
                            ? <button onClick={() => {
                                props.follow(elem.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.unfollow(elem.id)
                            }}>Unfollow</button>}
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
    )
}

