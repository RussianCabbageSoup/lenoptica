const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type);
    }

    async getAll(req, res) {
        try {
            let { search } = req.query;
            let whereCondition = {};

            if (search && search.trim()) {
                whereCondition = {
                    name: { [Op.iLike]: `%${search}%` }
                };
            }

            const types = await Type.findAndCountAll({
                where: whereCondition,
            });

            return res.json(types);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new TypeController();