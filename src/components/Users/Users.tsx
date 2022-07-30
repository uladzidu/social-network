import React from 'react';
import {userType} from "../../redux/users-reducer";
import styles from './users.module.css'
import {v1} from "uuid";

type UsersPropsType = {
    users: userType[]
    follow : (userId : string) => void
    unfollow : (userId : string) => void
    setUsers : (users : any) => void
}

export const Users = (props: UsersPropsType) => {

   if (props.users.length === 0) {
       props.setUsers([
           {
               id: v1(),
               fullName: 'Vlad',
               status: 'FrontEnd Dev coming soon ... ',
               location: {city: 'Wroclaw', country: 'Poland'},
               followed: true,
               photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
           },
           {
               id: v1(),
               fullName: 'Gyn',
               status: 'His wife',
               location: {city: 'Wroclaw', country: 'Poland'},
               followed: false,
               photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
           },
           {
               id: v1(),
               fullName: 'Andr',
               status: 'I am a Bro',
               location: {city: 'Minsk', country: 'Belarus'},
               followed: true,
               photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
           },
           {
               id: v1(),
               fullName: 'Father',
               status: 'Dzien dobry! ',
               location: {city: 'Molodechno', country: 'Belarus'},
               followed: true,
               photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'

           },
       ])
   }

    return (
        <div>

            {props.users.map(elem => <div key={elem.id}>

                <div>
                    <img className={styles.userPhoto} src={elem.photoUrl} alt="photo"/>
                </div>
                        <div>
                            {!elem.followed
                                ? <button onClick={ () => { props.follow(elem.id) } } >Follow</button>
                                : <button onClick={ () => { props.unfollow(elem.id) } } >Unfollow</button> }
                        </div>
                    <span>
                        <span>
                            <div>{elem.fullName}</div>
                            <div>{elem.status}</div>
                        </span>
                        <span>
                            <div>{elem.location.country}</div>
                            <div>{elem.location.city}</div>
                        </span>
                    </span>
                </div>
            )
            }
        </div>
    )
}

