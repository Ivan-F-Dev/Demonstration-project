import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:44380/'
});

export const API = {

    getMe() {
        return instance.get('account/me')
            .then(response => response.data)
    },

    signUp(nickname, name, email, password) {
        return instance.post('account/signUp', { nickname, name, email, password })
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('account/login', { email, password, rememberMe, captcha })
    },

    logout() {
        return instance.delete('account/login')
            .then(response => response)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)

    },

    getUsers(count = 10, page = 1, friend = '') {
        return instance.get(`users?count=${count}&page=${page}&friend=${friend}`)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
