import axios from "axios";

export type usersApiType = {
    getUsers: any
    followUser: any
    unfollowUser: any
    getProfile : any
    authorization : any
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7660ed7e-f677-4d6b-a08d-94c2433a5da0'
    }
})

export const usersApi: usersApiType = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id : number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId : number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    authorization() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

