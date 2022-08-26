import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg'


export class UsersClass extends React.Component<{}, any> {


    componentDidMount() {
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                // @ts-ignore
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        // @ts-ignore
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {
                    pages.map(elem =>
                            // @ts-ignore
                            <span onClick={ () => {this.props.change} } className={this.props.currentPage === elem ? styles.selected : ''}>
                        {elem}
                    </span>
                    )
                }
                //@ts-ignore
                {this.props.users.map((elem: any) => <div key={elem.id}>

                        <div>
                            <img className={styles.userPhoto}
                                 src={elem.photos.small !== null ? elem.photos.small : userPhoto}
                                 alt="photo"/>
                        </div>
                        <div>
                            {
                                !elem.followed
                                    ? <button onClick={() => {
                                        // @ts-ignore
                                        this.props.follow(elem.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        // @ts-ignore
                                        this.props.unfollow(elem.id)
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
        )
    }
}

