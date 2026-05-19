import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false 
        this._user = {}

        this._users = []

        this._search = ''

        this._isEditing = false

        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setUsers(users) {
        this._users = users
    }

    setSearch(query) {
        this._search = query
    }

    setIsEditing(bool) {
        this._isEditing = bool
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get users() {
        return this._users
    }

    get search() {
        return this._search
    }

    get isEditing() {
        return this._isEditing
    }
}