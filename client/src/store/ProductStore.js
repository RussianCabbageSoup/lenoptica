import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'тип 1'},
            {id: 2, name: 'тип 2'}
        ]

        this._brands = [
            {id: 1, name: 'Brand1'},
            {id: 2, name: 'Brand2'}
        ]
        
        this._products = [
            {id: 1, name: 'Очки 1', price: 1000, rating: 5, img: 'localhost:5000/static'},
            {id: 2, name: 'Очки 2', price: 1000, rating: 5, img: 'localhost:5000/static'},
            {id: 3, name: 'Очки 3', price: 1000, rating: 5, img: 'localhost:5000/static'},
            {id: 4, name: 'Очки 4', price: 1000, rating: 5, img: 'localhost:5000/static'}
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }
}