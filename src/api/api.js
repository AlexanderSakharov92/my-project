import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "79527a64-a024-4c5e-9ca4-04f4d4924703"}
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}
export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    loginn (email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe} )
    },
    logout () {
        return instance.delete(`auth/login` )
    }
}
export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status})
    }
}
export const followAPI = {
    postFollow (id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    deleteFollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }
}