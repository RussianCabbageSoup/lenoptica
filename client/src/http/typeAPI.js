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
