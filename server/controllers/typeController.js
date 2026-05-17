const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class TypeController {
    async create(req, res) {
        const { name } = req.body
        const type = await Type.create({ name })
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

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const type = await Type.findByPk(id);

            if (!type) {
                return next(ApiError.notFound(`type с id ${id} не найден`));
            }

            await type.destroy();

            return res.json({
                message: `type с id ${id} успешно удален`,
                deletedType: type
            });

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const type = await Type.findByPk(id);

            if (!type) {
                return next(ApiError.notFound(`type с id ${id} не найден`));
            }

            const updateData = {};
            if (name !== undefined) updateData.name = name;

            await type.update(updateData);

            const updatedProduct = await Type.findByPk(id);

            return res.json(updatedProduct);

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new TypeController();