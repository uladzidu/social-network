import axios from "axios";
import { userType } from "../redux/users-reducer";
import { ProfileType } from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "7660ed7e-f677-4d6b-a08d-94c2433a5da0",
    },
});

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance
                .get<GetUsersReqType, GetUsersResType>(
                    `/users?page=${currentPage}&count=${pageSize}`
                )
                //@ts-ignore
                .then((response) => response.data)
        );
    },
    followUser(userId: number) {
        return instance
            .post<GeneralResponseType<{}>>(`/follow/${userId}`)
            .then((response) => response.data);
    },
    unfollowUser(userId: number) {
        return instance
            .delete<GeneralResponseType<{}>>(`/follow/${userId}`)
            .then((response) => response.data);
    },
    isFriend(userId: number) {
        return instance.get(`/follow/${userId}`);
    },
};

export const profileApi = {
    getProfile(userId: number) {
        return instance
            .get<{ userId: number }>(`/profile/${userId}`)
            .then((response) => response.data as ProfileType);
    },
    getStatus(userId: number) {
        return (
            instance
                .get<{ userId: number }, ProfileType>(`/profile/status/${userId}`)
                //@ts-ignore
                .then((response) => response.data)
        );
    },
    updateStatus(status: string) {
        return instance.put<{ status: string }, GeneralResponseType<{}>>("/profile/status", {
            status,
        });
    },
    updateAvatar(image: string) {
        const formData = new FormData();
        formData.append("image", image);
        return instance.put("/profile/photo", formData);
        // return instance.put("/profile/photo", formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // });
    },
};

export const authApi = {
    authorization() {
        return instance
            .get<GeneralResponseType<{ id: number; login: string; email: string }>>("/auth/me")
            .then((res) => res.data); // возвращаем из всего респонса только объект дата
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginType, GeneralResponseType<{ userId: number }>>("/auth/login", {
            email,
            password,
            rememberMe,
        });
    },
    logout() {
        return instance.delete<GeneralResponseType<{}>>("/auth/login");
    },
};

// Types

export type LoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export type GeneralResponseType<T> = {
    data: T;
    messages: any[];
    fieldsErrors: any[];
    resultCode: number;
};

export type GetUsersResType = {
    items: userType[];
    totalCount: number;
    error?: any;
};

export type GetUsersReqType = {
    count?: number;
    page?: number;
    term?: number;
    friend?: number;
};
