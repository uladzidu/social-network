import React from 'react';
import {userType} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios, {AxiosResponse} from "axios";
import userPhoto from '../../assets/images/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg'

type UsersPropsType = {
    users: userType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: any) => void
}

export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
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
            {props.users.map(elem => <div key={elem.id}>

                    <div>
                        <img className={styles.userPhoto}
                             src={elem.photos.small !== null ? elem.photos.small : userPhoto }
                             alt="photo"/>
                    </div>
                    <div>
                        {!elem.followed
                            ? <button onClick={ () => {props.follow(elem.id)}}>Follow</button>
                            : <button onClick={() => {props.unfollow(elem.id)}}>Unfollow</button>}
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

