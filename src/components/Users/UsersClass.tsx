import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg'


export class UsersClass extends React.Component<{}, any> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map((elem: any) => <div key={elem.id}>

                        <div>
                            <img className={styles.userPhoto}
                                 src={elem.photos.small !== null ? elem.photos.small : userPhoto}
                                 alt="photo"/>
                        </div>
                        <div>
                            {!elem.followed
                                ? <button onClick={() => {
                                    this.props.follow(elem.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(elem.id)
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
}

