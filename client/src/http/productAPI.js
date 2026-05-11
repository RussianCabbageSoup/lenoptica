import { $host, $authHost } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

export const createProduct = async (product) => {
    try {
        const { data } = await $authHost.post('api/product', product)
        return data
    } catch (error) {
        console.log('catch: ', error)
    }
}

export const fetchProducts = async (typeId, brandId, limit = 6, page, minPrice, maxPrice) => {
    try {
        const { data } = await $host.get('api/product', {
        params: {typeId, brandId, limit, page, minPrice, maxPrice}
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

