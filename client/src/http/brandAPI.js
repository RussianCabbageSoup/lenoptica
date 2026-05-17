import { $host, $authHost } from "./index";

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async (search) => {
    const { data } = await $host.get('api/brand', {
        params: {
            search
        }
    })
    return data
}

export const deleteBrand = async (id) => {
    try {
        const { data } = await $authHost.delete('api/brand/' + id)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}

export const updateBrand = async (brand, id) => {
    try {
        const { data } = await $authHost.patch('api/brand/' + id, brand)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}