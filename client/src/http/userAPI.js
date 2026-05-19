import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (name, email, password) => {
    try {
        const { data } = await $host.post('api/user/reg', { name, email, password, role: 'USER' })
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (error) {
        console.log(error)
    }
}

export const login = async (email, password) => {
    try {
        const { data } = await $host.post('api/user/login', { email, password })
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (error) {
        console.log(error)
    }
}

export const check = async () => {
    try {
        const { data } = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (error) {
        console.log(error)
    }
}

export const fetchUsers = async (search) => {
    try {
        const { data } = await $authHost.get('api/user', {
            params: {
                search
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (id) => {
    try {
        const { data } = await $authHost.delete('api/user/' + id)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}

export const updateUser = async (user, id) => {
    try {
        const { data } = await $authHost.patch('api/user/' + id, user)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}