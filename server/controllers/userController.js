const { User, Basket } = require("../models/models");
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    async registration(req, res) {
        const {name, email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный адрес электронной почты или пароль'))
        }
        const candidate = await User.findOne({
            where: {email}
        })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, email, password: hashPassword, role})
        const basket = await Basket.create({userId: user.id})
        const jwt = jwt.sign({id: user.id, email: email, role}, )
    }

    async login(req, res) {

    }

    async chechAuth(req, res, next) {
        const {id} = req.query;
        if  (!id) {
            return next(ApiError.badRequest('не задан id'))             
        }
        res.json(id)
    }
}

module.exports = new UserController()