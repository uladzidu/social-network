import axios from "axios";

export type usersApiType = {
    getUsers: any
    followUser: any
    unfollowUser: any
    getProfile: any
}
export type profileApiType = {
    getProfile: any
    getStatus: any
    updateStatus: any
}
export type authApiType = {
    authorization: any
    login: any
    logout: any
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '7660ed7e-f677-4d6b-a08d-94c2433a5da0'
    }
})

export const usersApi: usersApiType = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`/follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`/follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        console.warn('redirected to profileApi')
        return profileApi.getProfile(userId)
    }
}

export const profileApi: profileApiType = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put('/profile/status', {status: status})
            .then(response => response.data)
    }
}

export const authApi: authApiType = {
    authorization() {
        return instance.get('/auth/me')
            .then( res => res.data  ) // возвращаем из всего респонса только объект дата
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('/auth/login')
    }
}

