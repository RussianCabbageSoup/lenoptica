import { $host, $authHost } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async (search) => {
    const { data } = await $host.get('api/type', {
        params: {
            search
        }
    })
    return data
}

export const deleteType = async (id) => {
    try {
        const { data } = await $authHost.delete('api/type/' + id)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}

export const updateType = async (type, id) => {
    try {
        const { data } = await $authHost.patch('api/type/' + id, type)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}