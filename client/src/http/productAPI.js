import { $host, $authHost } from "./index";

export const createProduct = async (product) => {
    try {
        const { data } = await $authHost.post('api/product', product)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}

export const updateProduct = async (product, id) => {
    try {
        const { data } = await $authHost.patch('api/product/' + id, product)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}

export const deleteProduct = async (id) => {
    try {
        const { data } = await $authHost.delete('api/product/' + id)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}

export const fetchProducts = async (typeId, brandId, limit = 6, page, minPrice, maxPrice, search) => {
    try {
        const { data } = await $host.get('api/product', {
        params: {
            typeId, 
            brandId, 
            limit, 
            page, 
            minPrice, 
            maxPrice, 
            search
        }
    })
    return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchSingleProduct = async (id) => {
    try {
        const { data } = await $host.get('api/product/' + id)
        return data
    } catch (error) {
        console.log(error)
    }
}

