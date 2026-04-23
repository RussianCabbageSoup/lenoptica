import { makeAutoObservable } from "mobx";
import imgs from '../images/png/glass.png'

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Солнцезащитные'},
            {id: 2, name: 'Особые'}
        ]

        this._brands = [
            {id: 1, name: 'Brand1'},
            {id: 2, name: 'Brand2'}
        ]
        
        this._products = [
            {id: 1, name: 'Очки 1', price: 1000, rating: 5, img: imgs},
            {id: 2, name: 'Очки 2', price: 1000, rating: 5, img: imgs},
            {id: 3, name: 'Очки 3', price: 1000, rating: 5, img: imgs},
            {id: 4, name: 'Очки 4', price: 1000, rating: 5, img: imgs},
            {id: 5, name: 'Очки 5', price: 1000, rating: 5, img: imgs},
            {id: 6, name: 'Очки 6', price: 1000, rating: 5, img: imgs},
        ]

        this._selectedBrand = {}
        this._selectedType = {}

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

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setSelectedType(type) {
        this._selectedType = type
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

    get selectedBrand() {
        return this._selectedBrand
    }

    get selectedType() {
        return this._selectedType
    }
}