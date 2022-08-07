import {v1} from "uuid";

export type userType = {
    id : string
    fullName : string
    status : string
    location : {city: string, country: string}
    followed : boolean
    photoUrl : string
}
export type userReducerInitStateType = {
    users : userType[]
}

type followACType = {
    type: 'FOLLOW',
    userId: string
}
type unfollowACType = {
    type: 'UNFOLLOW',
    userId: string
}
type setUsersACType = {
    type : 'SET-USERS',
    users : any
}

type usersReducerActionAllTypes = followACType | unfollowACType | setUsersACType

 const userReducerInitState : any = {
    users: <any> [
//         {
//             id: v1(),
//             fullName: 'Vlad',
//             status: 'FrontEnd Dev coming soon ... ',
//             location: {city: 'Wroclaw', country: 'Poland'},
//             followed: true,
//             photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
//         },
//         {
//             id: v1(),
//             fullName: 'Gyn',
//             status: 'His wife',
//             location: {city: 'Wroclaw', country: 'Poland'},
//             followed: false,
//             photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
//         },
//         {
//             id: v1(),
//             fullName: 'Andr',
//             status: 'I am a Bro',
//             location: {city: 'Minsk', country: 'Belarus'},
//             followed: true,
//             photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
//         },
//         {
//             id: v1(),
//             fullName: 'Father',
//             status: 'Dzien dobry! ',
//             location: {city: 'Molodechno', country: 'Belarus'},
//             followed: true,
//             photoUrl : 'https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
//
// },
  ]
}

export const usersReducer = (state: userReducerInitStateType = userReducerInitState, action: usersReducerActionAllTypes) : userReducerInitStateType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map( (elem : userType) =>
                    elem.id === action.userId
                        ? {...elem, followed: true}
                        : elem
                )
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map( (elem : userType) =>
                    elem.id === action.userId
                        ? {...elem, followed: false}
                        : elem
                )
            }
        }
        case 'SET-USERS' : {
            return {
                ...state,
                users : [...state.users , ...action.users]
            }
        }
        default:
            return state
    }
}
export const followAC = (userId: string) : followACType => {
    return {
        type: 'FOLLOW',
        userId: userId
    }
}
export const unfollowAC = (userId: string) : unfollowACType => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    }
}
export const setUsersAC = (users : any) : setUsersACType => {
    return {
        type : 'SET-USERS',
        users : users
    }
}

