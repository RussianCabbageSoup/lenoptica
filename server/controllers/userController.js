const { User } = require("../models/models");
const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {
        
    }

    async login(req, res) {
                                                                    //  56:30
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