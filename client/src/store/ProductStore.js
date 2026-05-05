import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []

        this._brands = []
        
        this._products = []

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