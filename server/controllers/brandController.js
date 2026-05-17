const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class BrandController {
    async create(req, res) {
        const { name } = req.body
        const brand = await Brand.create({ name })
        return res.json(brand);
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

            const brands = await Brand.findAndCountAll({
                where: whereCondition,
            });

            return res.json(brands);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new BrandController();