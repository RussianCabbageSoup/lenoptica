import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []

        this._brands = []
        
        this._products = []

        this._selectedBrand = {}
        this._selectedType = {}
        this._selectedProduct = {}

        this._minPrice = ''
        this._maxPrice = ''

        this._page = 1
        this._totalCount = 0
        this._limit = 6

        this._search = ''

        this._tableSearch = ''
        
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

    setMinPrice(min) {
        this._minPrice = min
    }

    setMaxPrice(max) {
        this._maxPrice = max
    }

    setSearch(query) {
        this._search = query
    }

    setTableSearch(query) {
        this._tableSearch = query
    }

    setSelectedProduct(product) {
        this._selectedProduct = product
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

    get minPrice() {
        return this._minPrice
    }
    
    get maxPrice() {
        return this._maxPrice
    }

    get search() {
        return this._search
    }

    get tableSearch() {
        return this._tableSearch
    }

    get selectedProduct() {
        return this._selectedProduct
    }
}