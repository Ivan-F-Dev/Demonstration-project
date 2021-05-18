import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2b9715a1-d8ae-497a-9821-aa6cd69b6167"
    }
});

export const API = {
    getMe() {
        return instance.get('auth/me')
            .then(response => response.data)
        // return response;
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)

    },
    getUsers(count = 10, page = 1) {
        return instance.get(`users?count=${count}&page=${page}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
