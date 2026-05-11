import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []

        this._brands = []
        
        this._products = []

        this._selectedBrand = {}
        this._selectedType = {}

        this._fitler = {}

        this._page = 1
        this._totalCount = 0
        this._limit = 6
        
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
        this.setPage(1)
        this._selectedBrand = brand
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setLimit(limit) {
        this._limit = limit
    }

    setRefresh(bool) {
        this._refresh = bool
    }

    setFilter(filter) {
        this._fitler = filter
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

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get filter() {
        return this._fitler
    }
}